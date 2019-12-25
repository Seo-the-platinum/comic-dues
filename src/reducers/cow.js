import { RECEIVE_COW } from '../actions/cow';

  export default function cow( state={},action) {
    switch(action.type) {
      case RECEIVE_COW:
        const { cow }= action
        return {
          ...state,
          ...cow,
        }
        default:
          return state;
    }
  }
