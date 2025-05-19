import { Module } from '@nestjs/common';
import { MCPEngineService } from './mcp-engine.service';

@Module({
  providers: [MCPEngineService],
})
export class EngineModule {}
