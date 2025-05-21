// src/mcp/mcp.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { McpService } from './mcp.service';

@Controller('jsonrpc')
export class McpController {
  constructor(private readonly mcpService: McpService) {}

  @Post()
  async handle(@Body() body: any) {
    return this.mcpService.handleRpc(body);
  }
}
