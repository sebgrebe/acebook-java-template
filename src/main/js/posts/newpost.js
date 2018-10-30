import React from 'react';
import axios from 'axios';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  submit(axiosLib = axios) {
    let that = this;
    let textAreaNewPost = document.getElementById("postInput").value;
    axiosLib.post('/api/posts', {
      content: textAreaNewPost
    })
    .then(function (response) {

      that.props.getPosts();
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  }

	render() {
    console.log(this.props);
		return (

      <div>
        <textarea id="postInput" placeholder="Enter Post">
        </textarea>
        <button onClick={() => this.submit()}>Post</button>
      </div>
		)
	}

}

export default NewPost;
