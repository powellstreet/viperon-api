import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/guards';

// modules
import { ConfigureModule } from './config/config.module';
import { CounselingModule } from './modules/counseling/counseling.module';
import { OpenAiService } from './modules/llm/openai.service';
import { EngineModule } from './modules/engine/engine.module';

@Module({
  imports: [ConfigureModule, CounselingModule, EngineModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    OpenAiService,
  ],
})
export class AppModule {}
