import { Injectable } from '@nestjs/common';
import { OpenAiService } from '../llm/openai.service';

@Injectable()
export class ContextAnalyzerAgent {
  constructor(private openai: OpenAiService) {}

  async handle(params: any) {
    const { userMessage } = params;
    const prompt =
      '너는 감정 분석가야. 사용자의 메시지를 읽고 가장 관련된 감정 태그 하나만 알려줘. 예: "무기력", "불안", "슬픔", "혼란" 등. 태그만 반환.';
    const result = await this.openai.chat([
      { role: 'system', content: prompt },
      { role: 'user', content: userMessage },
    ]);
    return { emotionTag: result.trim().replace(/"/g, '') };
  }
}
