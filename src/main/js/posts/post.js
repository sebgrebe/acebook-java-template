import React from 'react';
import Delete from './delete.js'
import Update from './update.js'
import UpdateBtn from './updateBtn.js'

class Post extends React.Component {
	constructor(props) {
		super(props)
		this.state = {showUpdate: false};
		this.toggleUpdate = this.toggleUpdate.bind(this);
	}

	toggleUpdate() {
		var showUpdate = this.state.showUpdate
		this.setState({
			showUpdate: showUpdate == false ? true : false
		})
	}

	render() {
		if (this.state.showUpdate == true) {
			return (
				<div className='post-main'>
					<Update content={this.props.post.content} getPosts={this.props.getPosts} post={this.props.post} toggleUpdate={this.toggleUpdate} />
				</div>
			)
		} else {
			return (
				<div className='post-main'>
					<Delete getPosts={this.props.getPosts} post={this.props.post} />
					<UpdateBtn toggleUpdate={this.toggleUpdate}/>
					<div className='post-content'>
						{this.props.post.content}
					</div>
				</div>
			)
		}
	}

}

export default Post;
