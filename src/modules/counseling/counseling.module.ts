import { Module } from '@nestjs/common';

import { CounselingController } from './counseling.controller';
import { CounselingService } from './counseling.service';
import { OpenAiService } from '../llm/openai.service';
import { McpEngineService } from '../engine/mcp-engine.service';
import { ContextAnalyzerAgent } from '../agent/context-analyzer.agent';
import { QuoteSelectorAgent } from '../agent/quote-selector.agent';
import { CounselorAgent } from '../agent/counselor.agent';

@Module({
  controllers: [CounselingController],
  providers: [
    CounselingService,
    OpenAiService,
    McpEngineService,
    CounselorAgent,
    ContextAnalyzerAgent,
    QuoteSelectorAgent,
  ],
})
export class CounselingModule {}
