import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import reducers from './reducers'

import registerServiceWorker from './registerServiceWorker'

// don't forget to apply middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'))
registerServiceWorker()
