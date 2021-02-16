import { combineReducers } from 'redux'
import tools from './tools/reducer'
import currentTool from './currentTool/reducer'

export default combineReducers({
  tools,
  currentTool
})
