import React from 'react';
import axios from 'axios';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: this.props.content}
  }

  onChange(e){
    this.setState({content: e.target.value})
  }

  updateSubmit() {
    var that = this;
    var content_new = this.state.content;
    console.log(content_new)
    console.log(this.props);
    var urlPath = this.props.post._links.self.href;
    axios.put(urlPath, {
      content: content_new
    })
    .then(function (response) {
      console.log(response);
      that.props.getPosts();
      that.props.toggleUpdate();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  clearSubmit() {
    this.props.toggleUpdate();
  }

	render() {
		return (
      <div>
        <textarea id="updatePost" value={this.state.content} onChange={(e) => this.onChange(e)}>
        </textarea>
        <button onClick={() => this.updateSubmit()} >Update</button>
        <button onClick={() => this.clearSubmit()} >Clear</button>
      </div>
		)
	}

}

export default Update;
