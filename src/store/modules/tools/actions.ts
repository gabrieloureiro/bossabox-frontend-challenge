import { ToolsInterface } from '@/models/tools'

export const readTools = (tools: ToolsInterface[]): any => {
  return {
    type: 'READ_TOOLS',
    payload: tools
  }
}
