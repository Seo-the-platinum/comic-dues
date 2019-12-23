import { _getImgs, _getReviews, _getArticles } from '../utils/_DATA'
import { receiveImgs } from './imgs';
import { receiveReviews } from './reviews'
import { receiveArticles } from './articles'

export function handleInitialData() {
  return (dispatch)=> {
    return Promise.all([_getImgs(), _getReviews(), _getArticles()]).then(values => {
      dispatch(receiveImgs(values[0]));
      dispatch(receiveReviews(values[1]));
      dispatch(receiveArticles(values[2]));
    })
  }
}
