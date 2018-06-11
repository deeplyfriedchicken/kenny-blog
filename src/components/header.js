import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="hero-head">
        <header>
          <div className="container">
            <div className="section">
              <div className="has-text-centered">
                <h1 className="title is-1 is-spaced">Bulma Blog 2</h1>
                <h4 className="subtitle is-4">a simple bulma blog theme</h4>
              </div>
            </div>
            <div className="section">
                    <div className="tabs is-centered">
                <ul>
                  <li className="is-active"><a href="index.html">Home</a></li>
                  <li><a href="post.html">Static Post</a></li>
                  <li><a href="">Portfolio</a></li>
                  <li><a href="">Search</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="about.html">About</a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Footer