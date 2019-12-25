import { _getImgs, _getReviews, _getArticles, _getCosplayer } from '../utils/_DATA'
import { receiveImgs } from './imgs';
import { receiveReviews } from './reviews'
import { receiveArticles } from './articles'
import { receiveCow } from './cow'

export function handleInitialData() {
  return (dispatch)=> {
    return Promise.all([_getImgs(), _getReviews(), _getArticles(), _getCosplayer()]).then(values => {
      dispatch(receiveImgs(values[0]));
      dispatch(receiveReviews(values[1]));
      dispatch(receiveArticles(values[2]));
      dispatch(receiveCow(values[3]))
    })
  }
}
