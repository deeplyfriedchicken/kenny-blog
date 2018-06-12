import axios from 'axios'
import { BASE_URL } from '../defaults'

export const FETCH_POSTS = 'fetch_posts'
export const FETCH_MORE_POSTS = 'fetch_more_posts'
export const GET_ACCOUNTS = 'get_accounts'

export function fetchPosts (endpoint) {
  const request = axios.get(`${BASE_URL}${endpoint}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchMorePosts (next) {
  const request = axios.get(`${BASE_URL}${next}`)
  return {
    type: FETCH_MORE_POSTS,
    payload: request
  }
}

export function getAccounts () {
  const request = axios.get(`${BASE_URL}/api/accounts`)
  return {
    type: GET_ACCOUNTS,
    payload: request
  }
}
