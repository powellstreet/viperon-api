import { Module } from '@nestjs/common';

import { McpEngineService } from './mcp-engine.service';
import { OpenAiService } from '../llm/openai.service';

import { ContextAnalyzerAgent } from '../agent/context-analyzer.agent';
import { QuoteSelectorAgent } from '../agent/quote-selector.agent';
import { CounselorAgent } from '../agent/counselor.agent';

@Module({
  providers: [
    McpEngineService,
    OpenAiService,
    ContextAnalyzerAgent,
    CounselorAgent,
    QuoteSelectorAgent,
  ],
})
export class EngineModule {}
