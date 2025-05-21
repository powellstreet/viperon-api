import { Injectable } from '@nestjs/common';
import * as quotes from '../../data/quotes.json';

@Injectable()
export class QuoteSelectorAgent {
  async handle(params: any) {
    const { emotionTag } = params;
    const tag = (emotionTag ?? '').toLowerCase();

    const filtered = quotes.filter((q: any) =>
      q.tags.map((t: string) => t.toLowerCase()).includes(tag),
    );

    const selected =
      filtered.length > 0
        ? filtered[Math.floor(Math.random() * filtered.length)]
        : quotes[Math.floor(Math.random() * quotes.length)];

    return { selectedQuote: selected };
  }
}
