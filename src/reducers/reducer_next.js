import { FETCH_POSTS, FETCH_MORE_POSTS } from '../actions/index'

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data.next
    case FETCH_MORE_POSTS:
      return action.payload.data.next
    default:
      return state
  }
}
