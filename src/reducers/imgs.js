import { RECEIVE_IMGS } from '../actions/imgs'

export default function imgs(state={}, action) {
  switch(action.type) {
    case RECEIVE_IMGS:
      const { imgs } = action
      return {
        ...state,
        ...imgs,
    }
    default :
      return state
  }
}
