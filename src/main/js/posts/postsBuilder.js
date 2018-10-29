import React from 'react';
import Posts from './posts';
import NewPost from './newpost';
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
        <NewPost getPosts={this.getPosts} />
        <Posts posts={this.state.posts}/>
      </div>
		)
	}
}

export default PostsBuilder;
