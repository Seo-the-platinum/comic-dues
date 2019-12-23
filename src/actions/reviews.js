export const RECEIVE_REVIEWS= 'RECEIVE_REVIEWS';

export function receiveReviews(reviews) {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  }
}
