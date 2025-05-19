import { Injectable } from '@nestjs/common';
import { Agent } from './agent.interface';
import { McpContext } from 'src/modules/engine/mcp-context.interface';
import { OpenAiService } from 'src/modules/llm/openai.service';

@Injectable()
export class CounselorAgent implements Agent {
  name = 'CounselorAgent';

  constructor(private readonly openai: OpenAiService) {}

  async process(context: McpContext): Promise<McpContext> {
    const { userMessage, selectedQuote } = context;

    const systemPrompt = `너는 따뜻한 상담사야. 사용자의 감정에 공감하면서 반드시 아래 명언을 인용해서 3~4문장 이내로 응답해줘. 너무 장황하지 않고 공감 중심으로.\n\n명언: "${selectedQuote?.quote}" — ${selectedQuote?.source}`;

    const result = await this.openai.chat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ]);

    context.finalReply = result.trim();
    return context;
  }
}
