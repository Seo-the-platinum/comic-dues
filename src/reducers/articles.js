import { RECEIVE_ARTICLES } from '../actions/articles'

export default function articles(state={}, action) {
  switch(action.type) {
    case RECEIVE_ARTICLES:
      const { articles }= action
      return {
        ...state,
        ...articles,
      }
      default:
        return state
  }
}
