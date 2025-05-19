import { Module } from '@nestjs/common';

import { CounselingController } from './counseling.controller';
import { CounselingService } from './counseling.service';
import { OpenAiService } from '../llm/openai.service';

@Module({
  controllers: [CounselingController],
  providers: [CounselingService, OpenAiService],
})
export class CounselingModule {}
