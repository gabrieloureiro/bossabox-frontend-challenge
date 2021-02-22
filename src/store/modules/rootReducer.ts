import { combineReducers } from 'redux'
import search from './search/reducer'
import tools from './tools/reducer'
import message from './message/reducer'

import { ToolsInterface } from '@/models/tools'
import { MessageInterface } from '@/models/message'

export interface GlobalStateInterface {
  search: string
  tools: ToolsInterface[]
  message: MessageInterface
}

export default combineReducers({
  search,
  tools,
  message
})
