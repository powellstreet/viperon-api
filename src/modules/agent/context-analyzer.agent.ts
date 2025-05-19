import { Injectable } from '@nestjs/common';
import { Agent } from './agent.interface';
import { McpContext } from 'src/modules/engine/mcp-context.interface';
import { OpenAiService } from 'src/modules/llm/openai.service';

@Injectable()
export class ContextAnalyzerAgent implements Agent {
  name = 'ContextAnalyzerAgent';

  constructor(private readonly openai: OpenAiService) {}

  async process(context: McpContext): Promise<McpContext> {
    const prompt = `너는 감정 분석가야. 사용자의 메시지를 읽고 가장 관련된 감정 태그 하나만 알려줘. 예시: "무기력", "불안", "슬픔", "혼란" 등. 다른 말 없이 태그 하나만 반환해.`;

    const result = await this.openai.chat([
      { role: 'system', content: prompt },
      { role: 'user', content: context.userMessage },
    ]);

    context.emotionTag = result.trim().replace(/"/g, '');
    return context;
  }
}
