/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import produce from 'immer'

const searchValue = (state = '', action: any): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'GET_SEARCH_VALUE': {
        const search = action.payload
        draft.slice(999)
        return search
      }
      default: {
        return state
      }
    }
  })
}

export default searchValue
