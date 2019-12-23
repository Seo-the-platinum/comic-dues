import { RECEIVE_REVIEWS } from '../actions/reviews'

export default function reviews(state={}, action) {
  switch(action.type) {
    case RECEIVE_REVIEWS:
      const { reviews } = action
      return {
        ...state,
        ...reviews,
      }
      default:
      return state
  }
}
