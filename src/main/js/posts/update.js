import React from 'react';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: this.props.content}
  }

  onChange(e){
    this.setState({content: e.target.value})
  }

  submit() {
    console.log(document.getElementById('updatePost').value)
  }

	render() {
		return (
      <div>
        <textarea id="updatePost" value={this.state.content} onChange={(e) => this.onChange(e)}>
        </textarea>
        UpdateField
        <button click={() => this.submit()} >Update</button>
      </div>
		)
	}

}

export default Update;
