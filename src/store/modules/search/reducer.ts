/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import produce from 'immer'

const search = (state = '', action: any): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'READ_SEARCH_VALUE': {
        const searchValue = action.payload
        draft.slice(999)
        return searchValue
      }
      default: {
        return state
      }
    }
  })
}

export default search
