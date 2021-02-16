/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ToolsInterface } from '@/models/tools'

export const createTool = (tool: ToolsInterface) => {
  return {
    type: 'CREATE_TOOL',
    payload: tool
  }
}

export const readTools = (tools: ToolsInterface[]) => {
  return {
    type: 'READ_TOOLS',
    payload: tools
  }
}

export const updateTool = (tool: ToolsInterface) => {
  return {
    type: 'UPDATE_TOOL',
    payload: tool
  }
}
