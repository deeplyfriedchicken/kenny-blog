import React, { Component } from 'react'
import PostsIndex from './posts'

class Main extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container ">
          <div className="columns is-multiline is-mobile is-centered">
            <div className="column is-8 is-centered">
              
              <PostsIndex />

            </div>
              
          </div>
        </div>
      </div>
    )
  }
}

export default Main