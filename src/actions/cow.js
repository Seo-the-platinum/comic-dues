export const RECEIVE_COW= 'RECEIVE_COW'

export function receiveCow(cow) {
  return {
    type: RECEIVE_COW,
    cow
  }
}
