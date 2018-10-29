import React from 'react';
import axios from 'axios';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  submit() {
    let that = this;
    let textAreaNewPost = document.getElementById("postInput").value;
    axios.post('/api/posts', {
      content: textAreaNewPost
    })
    .then(function (response) {
      console.log(response);
      that.props.getPosts();
    })
    .catch(function (error) {
      console.log(error);
    });

  }

	render() {
    console.log(this.props);
		return (

      <div>
        <textarea id="postInput">
        </textarea>
        <button onClick={() => this.submit()}>Post</button>
      </div>
		)
	}

}

export default NewPost;
