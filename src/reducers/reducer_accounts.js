import { GET_ACCOUNTS } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case GET_ACCOUNTS:
      return action.payload.data.accounts.filter(account => account.is_active === true)
    default:
      return state
  }
}
