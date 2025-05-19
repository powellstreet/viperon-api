import { Module } from '@nestjs/common';
import { ContextAnalyzerAgent } from './context-analyzer.agent';
import { QuoteSelectorAgent } from './quote-selector.agent';
import { CounselorAgent } from './counselor.agent';
import { OpenAiService } from '../llm/openai.service';

@Module({
  providers: [
    ContextAnalyzerAgent,
    QuoteSelectorAgent,
    CounselorAgent,
    OpenAiService,
  ],
  exports: [ContextAnalyzerAgent, QuoteSelectorAgent, CounselorAgent],
})
export class AgentModule {}
