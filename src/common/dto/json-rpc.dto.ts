export class JsonRpcRequest<T = any> {
  jsonrpc: '2.0';
  method: string;
  params?: T;
  id: string | number | null;
}

export class JsonRpcResponse<T = any> {
  jsonrpc: '2.0';
  result?: T;
  error?: JsonRpcError;
  id: string | number | null;
}

export class JsonRpcError {
  code: number;
  message: string;
  data?: any;
}

// JSON-RPC 2.0 표준 에러 코드
export enum JsonRpcErrorCode {
  ParseError = -32700,
  InvalidRequest = -32600,
  MethodNotFound = -32601,
  InvalidParams = -32602,
  InternalError = -32603,
  ServerError = -32000,
}

// 각 메서드별 파라미터 타입 정의
export interface ContextAnalyzeParams {
  text: string;
  context?: {
    previousMessages?: string[];
    metadata?: Record<string, any>;
  };
}

export interface QuoteSelectParams {
  context: string;
  criteria?: {
    category?: string[];
    sentiment?: 'positive' | 'negative' | 'neutral';
    maxLength?: number;
  };
}

export interface CounselorReplyParams {
  context: string;
  quote?: string;
  userInput: string;
  options?: {
    tone?: 'formal' | 'casual' | 'empathetic';
    maxLength?: number;
  };
}

// 각 메서드별 결과 타입 정의
export interface ContextAnalyzeResult {
  analysis: {
    sentiment: 'positive' | 'negative' | 'neutral';
    topics: string[];
    keyPoints: string[];
    emotionalState?: string;
  };
  confidence: number;
}

export interface QuoteSelectResult {
  quote: {
    text: string;
    author?: string;
    source?: string;
    category?: string;
  };
  relevance: number;
  explanation?: string;
}

export interface CounselorReplyResult {
  reply: string;
  suggestedActions?: string[];
  followUpQuestions?: string[];
  emotionalTone?: string;
}
