import { Injectable } from '@nestjs/common';
import { OpenAiService } from '../llm/openai.service';

@Injectable()
export class CounselorAgent {
  constructor(private openai: OpenAiService) {}

  async handle(params: any) {
    const { userMessage, selectedQuote } = params;
    const prompt = `너는 따뜻한 상담사야. 반드시 아래 명언을 인용해서 3~4문장 이내로 응답해줘. 너무 장황하지 않고 공감 중심으로.

명언: "${selectedQuote?.quote}" — ${selectedQuote?.source}`;
    const result = await this.openai.chat([
      { role: 'system', content: prompt },
      { role: 'user', content: userMessage },
    ]);
    return { finalReply: result.trim() };
  }
}
