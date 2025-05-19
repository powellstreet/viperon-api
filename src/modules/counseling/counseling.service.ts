import { Injectable } from '@nestjs/common';
import { OpenAiService } from '../llm/openai.service';
import * as quotes from './quotes.json';
import { buildPrompt } from './prompt-builder';
import { CreateCounselingRequestDto } from './dto';

@Injectable()
export class CounselingService {
  constructor(private readonly openai: OpenAiService) {}

  async generateReply(body: CreateCounselingRequestDto) {
    const { message } = body;
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const prompt = buildPrompt(message, quote);

    const reply = await this.openai.chat([
      {
        role: 'system',
        content: prompt,
      },
    ]);

    return { reply };
  }

  async findAll() {
    const data = [];
    return data;
  }
}
