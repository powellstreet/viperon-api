export interface McpContext {
  userMessage: string;
  emotionTag?: string;
  topicTag?: string;
  selectedQuote?: {
    quote: string;
    source: string;
    tags: string[];
  };
  finalReply?: string;
}
