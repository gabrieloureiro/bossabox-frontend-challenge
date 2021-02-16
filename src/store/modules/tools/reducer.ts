/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import produce from 'immer'

import api from '@/services/api'

const tools = (state = [], action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'CREATE_TOOL': {
        const tool = action.payload

        draft.push(tool)

        api.post('tools', tool)

        break
      }

      case 'READ_TOOLS': {
        const tools = action.payload

        return tools
      }

      default: {
        return state
      }
    }
  })
}

export default tools
