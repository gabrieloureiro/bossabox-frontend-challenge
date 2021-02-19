import { ToolsInterface } from '@/models/tools'
import { combineReducers } from 'redux'
import search from './search/reducer'
import tools from './tools/reducer'

export interface GlobalStateInterface {
  search: string
  tools: ToolsInterface[]
}

export default combineReducers({
  search,
  tools
})
