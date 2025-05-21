import { Module } from '@nestjs/common';
import { McpController } from './mcp.controller';
import { McpService } from './mcp.service';
import { OpenAiService } from '../llm/openai.service';

import { ContextAnalyzerAgent } from '../agent/context-analyzer.agent';
import { QuoteSelectorAgent } from '../agent/quote-selector.agent';
import { CounselorAgent } from '../agent/counselor.agent';

@Module({
  controllers: [McpController],
  providers: [
    McpService,
    OpenAiService,
    ContextAnalyzerAgent,
    QuoteSelectorAgent,
    CounselorAgent,
  ],
})
export class McpModule {}
