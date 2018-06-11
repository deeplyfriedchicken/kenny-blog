import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'

const ROOT_URL = 'http://localhost:5000'


export function fetchPosts(endpoint = '/api/posts') {
  const request = axios.get(`${ROOT_URL}${endpoint}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}