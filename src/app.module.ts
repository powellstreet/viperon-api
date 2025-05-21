import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/guards';

// modules
import { AgentModule } from './modules/agent/agent.module';
import { ConfigureModule } from './config/config.module';
import { OpenAiService } from './modules/llm/openai.service';
import { McpModule } from './modules/mcp/mcp.module';
import { ContextAnalyzerAgent } from './modules/agent/context-analyzer.agent';
import { QuoteSelectorAgent } from './modules/agent/quote-selector.agent';
import { CounselorAgent } from './modules/agent/counselor.agent';

@Module({
  imports: [AgentModule, ConfigureModule, McpModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    OpenAiService,
    ContextAnalyzerAgent,
    QuoteSelectorAgent,
    CounselorAgent,
  ],
})
export class AppModule {}
