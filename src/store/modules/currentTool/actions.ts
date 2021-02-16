/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ToolsInterface } from '@/models/tools'

export const getCurrentTool = (tool: ToolsInterface) => {
  return {
    type: 'GET_CURRENT_TOOL',
    payload: tool
  }
}
