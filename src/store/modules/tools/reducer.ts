/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import produce from 'immer'

const tools = (state = [], action: any): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'READ_TOOLS': {
        const tool = action.payload

        return tool
      }
      default: {
        return state
      }
    }
  })
}

export default tools
