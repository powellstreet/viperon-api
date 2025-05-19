import { Injectable } from '@nestjs/common';
import { Agent } from './agent.interface';
import { McpContext } from 'src/modules/engine/mcp-context.interface';
import quotes from '../../data/quotes.json';

@Injectable()
export class QuoteSelectorAgent implements Agent {
  name = 'QuoteSelectorAgent';

  async process(context: McpContext): Promise<McpContext> {
    const tag = context.emotionTag?.toLowerCase() ?? '';
    const filtered = quotes.filter((q) =>
      q.tags.map((t: string) => t.toLowerCase()).includes(tag),
    );

    const selected =
      filtered.length > 0
        ? filtered[Math.floor(Math.random() * filtered.length)]
        : quotes[Math.floor(Math.random() * quotes.length)];

    context.selectedQuote = selected;
    return context;
  }
}
