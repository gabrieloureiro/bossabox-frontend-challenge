/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import produce from 'immer'

const message = (state = '', action: any): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'READ_MESSAGE': {
        const msg = action.payload

        return msg
      }
      default: {
        return state
      }
    }
  })
}

export default message
