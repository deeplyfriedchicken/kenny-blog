import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return (
      <div>
        <div className="header-content">
          <div className="has-text-centered">
            <h1 className="title">Contact</h1>
          </div>
        </div>
        <div className="subheader-content has-text-centered">
          <div className="nav-center">
            <a className="nav-item">
              <span className="icon"><i className="fab fa-facebook"></i></span>
            </a>
            <a className="nav-item">
              <span className="icon"><i className="fab fa-twitter"></i></span>
            </a>
            <a className="nav-item">
              <span className="icon"><i className="fab fa-instagram"></i></span>
            </a>
            <a className="nav-item">
              <span className="icon"><i className="fa fa-rss"></i></span>
            </a>
          </div>
          <hr/>
        </div>
        <div className="single-content">
          <form>
            <div className="field">
              <label className="label">Name</label>
              <p className="control">
                <input className="input" type="text" placeholder="Text input"/>
              </p>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <p className="control">
                <input className="input" type="text" placeholder="Email input" value=""/>
              </p>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <p className="control">
                <textarea className="textarea" placeholder="Textarea"></textarea>
              </p>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-danger">Send</button>
              </p>
              <p className="control">
                <button className="button is-primary">Clear</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
