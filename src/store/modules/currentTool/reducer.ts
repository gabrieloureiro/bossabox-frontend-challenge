/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const INITIAL_STATE = {}

const currentTool = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CURRENT_TOOL': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default currentTool
