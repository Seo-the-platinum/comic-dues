import { RECEIVE_EVENTS } from '../actions/events'

export default function events(state={}, action) {
  switch(action.type) {
    case RECEIVE_EVENTS:
      const { events }= action
      return {
        ...state,
        ...events,
      }
      default:
        return state
  }
}
