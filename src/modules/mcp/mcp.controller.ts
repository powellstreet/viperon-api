// src/mcp/mcp.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { McpService } from './mcp.service';
import { JsonRpcRequest, JsonRpcResponse } from '../../common/dto/json-rpc.dto';

@Controller('jsonrpc')
export class McpController {
  constructor(private readonly mcpService: McpService) {}

  @Post()
  async handle(@Body() body: JsonRpcRequest): Promise<JsonRpcResponse> {
    return this.mcpService.handleRpc(body);
  }
}
