import { combineReducers } from 'redux'
import PostsReducer from './reducer_posts'
import NextReducer from './reducer_next'
import AccountsReducer from './reducer_accounts'

const rootReducer = combineReducers({
  posts: PostsReducer,
  next: NextReducer,
  accounts: AccountsReducer
})

export default rootReducer
