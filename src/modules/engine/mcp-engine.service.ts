import { Injectable } from '@nestjs/common';
import { McpContext } from './mcp-context.interface';
import { ContextAnalyzerAgent } from 'src/modules/agent/context-analyzer.agent';
import { QuoteSelectorAgent } from 'src/modules/agent/quote-selector.agent';
import { CounselorAgent } from 'src/modules/agent/counselor.agent';

@Injectable()
export class McpEngineService {
  constructor(
    private readonly analyzer: ContextAnalyzerAgent,
    private readonly selector: QuoteSelectorAgent,
    private readonly counselor: CounselorAgent,
  ) {}

  async run(userMessage: string): Promise<string> {
    let context: McpContext = { userMessage };
    context = await this.analyzer.process(context);
    context = await this.selector.process(context);
    context = await this.counselor.process(context);
    return context.finalReply!;
  }
}
