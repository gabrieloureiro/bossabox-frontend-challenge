import { combineReducers } from 'redux'
import search from './search/reducer'
import tools from './tools/reducer'

import { ToolsInterface } from '@/models/tools'

export interface GlobalStateInterface {
  search: string
  tools: ToolsInterface[]
}

export default combineReducers({
  search,
  tools
})
