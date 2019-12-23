export const RECEIVE_IMGS= 'RECEIVE_IMGS';

/*create function to be used by actions/shared file. When the shared file
  retieves the images from the data file, it will call this function using
  dispatch to update the store.
*/
export function receiveImgs (imgs) {
  return {
    type: RECEIVE_IMGS,
    imgs,
  }
}
