import { applyMiddleware, createStore } from 'redux'
import rootReducer from './modules/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

import { ToolsInterface } from '@/models/tools'

export interface StateInterface {
  tools: ToolsInterface[]
  currentTool: ToolsInterface
}

const middlewares = []

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
