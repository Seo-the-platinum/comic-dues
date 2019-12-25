import { combineReducers } from 'redux'
import imgs from './imgs'
import reviews from './reviews'
import articles from './articles'
import cow from './cow'

/*
  combine the 3 reducers and slices of state into one using combineReducers
  and then export it so it can be passed to createStore.
*/
export default combineReducers({
  imgs,
  reviews,
  articles,
  cow,
})
