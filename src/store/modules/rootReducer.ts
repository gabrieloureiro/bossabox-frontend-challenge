import { combineReducers } from 'redux'
import search from './search/reducer'

export interface GlobalStateInterface {
  search: string
}

export default combineReducers({
  search
})
