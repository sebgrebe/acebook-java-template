import React from 'react';
import Posts from './posts';
import NewPost from './newpost';
import Signup from './signup';
import axios from 'axios';

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: []};
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts(){
    axios.get('/api/posts')
    .then(response => {
      console.log(response);
      this.setState({posts: response.data._embedded.posts});
    });
  };

	render() {
		return (
      <div>
        <Signup />
        <NewPost getPosts={this.getPosts} />
        <Posts getPosts={this.getPosts} posts={this.state.posts}/>
      </div>
		)
	}
}

export default PostsBuilder;
