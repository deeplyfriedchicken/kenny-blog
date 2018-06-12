import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <div className="hero-foot footer-custom">
        <div className="container has-text-centered">
          <hr/>
          <a className="nav-item" href="http://github.com/plasticneko">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
          </a>
          <p>engineered by <a href="https://github.com/kcunanan/kenny-blog">kcunanan</a></p>
        </div>
      </div>
    )
  }
}

export default Footer
