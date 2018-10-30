import React from 'react';
import axios from 'axios';

class Delete extends React.Component {
  constructor(props) {
    super(props);

  }

  delete() {
      var that = this;
      var urlPath = this.props.post._links.post.href;
      var deleteObject = {
        method: 'delete',
        url: urlPath
      }
      axios(deleteObject)
      .then(function() {
        that.props.getPosts();
      })

  }

	render() {
		return (
      <div>
      <button onClick={() => this.delete()}>Delete</button>
      </div>
		)
	}

}

export default Delete;
