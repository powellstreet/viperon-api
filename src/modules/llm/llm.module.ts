import { Module } from '@nestjs/common';
import { OpenAiService } from './openai.service';

@Module({})
export class LlmModule {
  providers: [OpenAiService];
}

export class CounselingModule {}
