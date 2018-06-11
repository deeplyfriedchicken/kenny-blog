import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="hero-foot footer-custom">
        <div className="container has-text-centered">
          <hr/>
          <a className="nav-item" href="http://github.com/plasticneko">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
          </a>
          <p>template by <a href="http://github.com/plasticneko">github.com/plasticneko</a></p>
        </div>
      </div>
    )
  }
}

export default Footer