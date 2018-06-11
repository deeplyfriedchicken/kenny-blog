import _ from 'lodash'
import React , { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'

import Moment from 'react-moment'

import '../styles/posts.css'


class PostsIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {isLoading: true}
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    this.fetchMorePosts()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.next && !this.state.isLoading) {
      this.setState({ isLoading: true })
      setTimeout(() => {
        this.fetchMorePosts()
      }, 1000)
      
    }
  }

  fetchMorePosts() {
    this.props.fetchPosts(this.props.next).then(() => {
      this.setState({ isLoading: false })
    })
  }

  renderCategories(categories) {
    return _.map(categories, category => {
      return (
        <a key={category}>{category}</a>
      )
    })
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
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
              <p><a className="button" href={post.link} target="_blank">Continue Reading</a></p>
            </div>
          </div>
        </div>
      )
    })
  }

  renderLoading(loading) {
    if (loading) {
      return (
        <div className="has-text-centered"><i className="fa-spin fas fa-spinner"></i></div>
      )
    }
  }

  render() {
    return (
      <div className="posts">
        {this.renderPosts()}
        {this.renderLoading(this.state.isLoading)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    posts: state.posts.posts,
    next: state.posts.next,
    prev: state.posts.prev
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)