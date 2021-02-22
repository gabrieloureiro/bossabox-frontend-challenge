import { ToolsInterface } from '@/models/tools'
import { combineReducers } from 'redux'
import search from './search/reducer'
import tools from './tools/reducer'
import message from './message/reducer'

export interface GlobalStateInterface {
  search: string
  tools: ToolsInterface[]
  message: string
}

export default combineReducers({
  search,
  tools,
  message
})
