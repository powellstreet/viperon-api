import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenAiService {
  private openai: OpenAI;

  constructor(private readonly config: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.config.get<string>('OPENAI_API_KEY'),
    });
  }

  async chat(
    messages: { role: 'user' | 'system' | 'assistant'; content: string }[],
  ) {
    const response = await this.openai.responses.create({
      model: 'gpt-4o-mini',
      input: messages,
      max_output_tokens: 100,
      temperature: 0.7,
    });

    const output = response.output_text ?? '';
    return output;
  }
}
