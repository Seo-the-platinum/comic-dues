import { _getImgs, _getReviews, _getArticles, _getCosplayer, _getEvents } from '../utils/_DATA'
import { receiveImgs } from './imgs';
import { receiveReviews } from './reviews'
import { receiveArticles } from './articles'
import { receiveCow } from './cow'
import { receiveEvents } from './events'

export function handleInitialData() {
  return (dispatch)=> {
    return Promise.all([
      _getImgs(),
      _getReviews(),
      _getArticles(),
      _getCosplayer(),
      _getEvents()]).then(values => {
      dispatch(receiveImgs(values[0]));
      dispatch(receiveReviews(values[1]));
      dispatch(receiveArticles(values[2]));
      dispatch(receiveCow(values[3]));
      dispatch(receiveEvents(values[4]));
    })
  }
}
