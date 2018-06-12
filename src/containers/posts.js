import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts, fetchMorePosts } from '../actions/index'

import Moment from 'react-moment'

import '../styles/posts.css'

class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll, false)
    this.fetchPosts()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll () {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.next && !this.state.isLoading) {
      this.setState({ isLoading: true })
      setTimeout(() => {
        this.fetchMorePosts(this.props.next)
      }, 1000)
    }
  }

  fetchPosts () {
    this.props.fetchPosts(this.props.url).then(() => {
      this.setState({ isLoading: false })
    })
  }

  fetchMorePosts (next) {
    console.log(next)
    this.props.fetchMorePosts(next).then(() => {
      this.setState({ isLoading: false })
    })
  }

  renderCategories (categories) {
    return categories.map(category => {
      return (
        <Link key={category} to={`/category/${category}`}>{category}</Link>
      )
    })
  }

  renderPosts () {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <div className="header-content">
            <div className="has-text-centered">
              <h1 className="title">
                {post.title}
              </h1>
            </div>
          </div>
          <img src={post.thumbnail} />
          <div className="subheader-content has-text-centered">
            <p>
              <span>posted </span>
              <a>
                <Moment fromNow parse="YYYY-MM-DD HH:mm:ss">{post.pub_date}</Moment>
              </a>
              <span> in </span>
              <span className="categories">{this.renderCategories(post.categories)}</span>
              <span> from </span>
              <a>{post.account}</a></p>
            <hr/>
          </div>

          <div className="content">
            <div dangerouslySetInnerHTML={{__html: post.description}} />
            <div className="has-text-centered">
              <p><a className="button" href={post.link} rel="noopener noreferrer" target="_blank">Continue Reading</a></p>
            </div>
          </div>
        </div>
      )
    })
  }

  renderLoading (loading) {
    if (loading) {
      return (
        <div className="has-text-centered"><i className="fa-spin fas fa-spinner"></i></div>
      )
    }
  }

  render () {
    return (
      <div className="posts">
        {this.renderPosts()}
        {this.renderLoading(this.state.isLoading)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
    next: state.next
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchMorePosts })(Posts)
