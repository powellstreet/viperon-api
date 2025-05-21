// src/mcp/mcp.service.ts
import { Injectable } from '@nestjs/common';
import { ContextAnalyzerAgent } from '../agent/context-analyzer.agent';
import { QuoteSelectorAgent } from '../agent/quote-selector.agent';
import { CounselorAgent } from '../agent/counselor.agent';

@Injectable()
export class McpService {
  constructor(
    private readonly contextAnalyzer: ContextAnalyzerAgent,
    private readonly quoteSelector: QuoteSelectorAgent,
    private readonly counselor: CounselorAgent,
  ) {}

  private readonly registry = {
    'context.analyze': this.contextAnalyzer.handle.bind(this.contextAnalyzer),
    'quote.select': this.quoteSelector.handle.bind(this.quoteSelector),
    'counselor.reply': this.counselor.handle.bind(this.counselor),
  };

  async handleRpc(request: any) {
    const { method, params, id } = request;
    if (!this.registry[method]) {
      return {
        jsonrpc: '2.0',
        error: { code: -32601, message: 'Method not found' },
        id,
      };
    }
    try {
      const result = await this.registry[method](params);
      return { jsonrpc: '2.0', result, id };
    } catch (error) {
      return {
        jsonrpc: '2.0',
        error: { code: -32000, message: error?.message ?? 'Server error' },
        id,
      };
    }
  }
}
