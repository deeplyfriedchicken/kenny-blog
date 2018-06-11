import { FETCH_POSTS } from '../actions/index'

const initialState = {
  posts: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      const data = action.payload.data
      const posts = state.posts
      return {
        'posts': state.posts.concat(data.posts),
        'next': data.next,
        'prev': data.prev
      }
    default:
      return state
  }
}