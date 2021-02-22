/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MessageInterface } from '@/models/message'
import produce from 'immer'

const message = (state = {} as MessageInterface, action: any): any => {
  return produce(state, draft => {
    switch (action.type) {
      case 'READ_MESSAGE': {
        const object = action.payload

        return object
      }
      default: {
        return state
      }
    }
  })
}

export default message
