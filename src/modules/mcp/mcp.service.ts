// src/mcp/mcp.service.ts
import { Injectable } from '@nestjs/common';
import { ContextAnalyzerAgent } from '../agent/context-analyzer.agent';
import { QuoteSelectorAgent } from '../agent/quote-selector.agent';
import { CounselorAgent } from '../agent/counselor.agent';
import {
  JsonRpcRequest,
  JsonRpcResponse,
  JsonRpcError,
  JsonRpcErrorCode,
  ContextAnalyzeParams,
  QuoteSelectParams,
  CounselorReplyParams,
  ContextAnalyzeResult,
  QuoteSelectResult,
  CounselorReplyResult,
} from '../../common/dto/json-rpc.dto';

type MethodHandler<TParams, TResult> = (params: TParams) => Promise<TResult>;

interface MethodRegistry {
  'context.analyze': MethodHandler<ContextAnalyzeParams, ContextAnalyzeResult>;
  'quote.select': MethodHandler<QuoteSelectParams, QuoteSelectResult>;
  'counselor.reply': MethodHandler<CounselorReplyParams, CounselorReplyResult>;
}

@Injectable()
export class McpService {
  private readonly registry: MethodRegistry;

  constructor(
    private readonly contextAnalyzer: ContextAnalyzerAgent,
    private readonly quoteSelector: QuoteSelectorAgent,
    private readonly counselor: CounselorAgent,
  ) {
    this.registry = {
      'context.analyze': this.contextAnalyzer.handle.bind(this.contextAnalyzer),
      'quote.select': this.quoteSelector.handle.bind(this.quoteSelector),
      'counselor.reply': this.counselor.handle.bind(this.counselor),
    };
  }

  async handleRpc(request: JsonRpcRequest): Promise<JsonRpcResponse> {
    const { method, params, id } = request;

    // JSON-RPC 2.0 스펙 검증
    if (request.jsonrpc !== '2.0') {
      return this.createErrorResponse(
        JsonRpcErrorCode.InvalidRequest,
        'Invalid JSON-RPC version',
        id,
      );
    }

    // 메서드 존재 여부 확인
    if (!this.registry[method as keyof MethodRegistry]) {
      return this.createErrorResponse(
        JsonRpcErrorCode.MethodNotFound,
        `Method '${method}' not found`,
        id,
      );
    }

    try {
      const handler = this.registry[method as keyof MethodRegistry];
      const result = await handler(params as any);
      return {
        jsonrpc: '2.0',
        result,
        id,
      };
    } catch (error) {
      return this.createErrorResponse(
        JsonRpcErrorCode.ServerError,
        error?.message ?? 'Internal server error',
        id,
        error,
      );
    }
  }

  private createErrorResponse(
    code: JsonRpcErrorCode,
    message: string,
    id: string | number | null,
    data?: any,
  ): JsonRpcResponse {
    const error: JsonRpcError = {
      code,
      message,
      ...(data && { data }),
    };

    return {
      jsonrpc: '2.0',
      error,
      id,
    };
  }
}
