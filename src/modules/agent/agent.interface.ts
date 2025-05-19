import { McpContext } from 'src/modules/engine/mcp-context.interface';

export interface Agent {
  name: string;
  process(context: McpContext): Promise<McpContext>;
}
