import React from 'react';
import Post from './post'

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

	render() {
		return (
      <article className='posts-main'>
        <h1 className='posts-title'>
          Posts
        </h1>
  			<div className='posts-items'>
  				{this.renderPosts()}
  			</div>
      </article>
		)
	}

  renderPosts() {
    return this.props.posts.map(post =>
			<Post getPosts={this.props.getPosts} post={post}/>
		);
  }
}

export default Posts;
