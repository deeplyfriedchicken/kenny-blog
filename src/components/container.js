import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import About from './about'
import Contact from './contact'
import BlogList from './blog_list'

class Container extends Component {
  render () {
    return (
      <div className="hero-body">
        <div className="container ">
          <div className="columns is-multiline is-mobile is-centered">
            <div className="column is-8 is-centered">
              <Route path="/" component={BlogList} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Container
