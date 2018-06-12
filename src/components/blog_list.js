import React, { Component } from 'react'
import Posts from '../containers/posts'
import { Route } from 'react-router-dom'

class BlogList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      url: '/api/posts'
    }
  }

  render () {
    return (
      <div>
        <Route exact path="/" render={(props) => (
          <Posts url='/api/posts' key={'/'} />
        )} />
        <Route path='/category/:name' render={(props) => (
          <Posts url={`/api/posts/category/${props.match.params.name}`} key={props.match.params.name} />)} />
        <Route path='/account/:name' render={(props) => (
          <Posts url={`/api/posts/account/${props.match.params.name}`} key={props.match.params.name} />)} />
      </div>
    )
  }
}

export default BlogList
