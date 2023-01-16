import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import auth from '../services/authService';
import axios from 'axios';
const apiEndpoint = 'http://localhost:5000/api/issues';

class ForumIssue extends Component {
	state = {
		newComment: '',
		issue: {},
		comments: [],
		user: {}
	};

	async componentDidMount() {
		let user = auth.getCurrentUser();
		if (user) {
			const { data } = await axios.get(
				'http://localhost:5000/api/users/' + user._id
			);
			user = data[0];
			this.setState({ user });
		} else if (!user) {
			user = {
				_id: null
			};
			this.setState({ user });
		}

		const { data } = await axios.get(
			apiEndpoint + '/' + this.props.match.params.id
		);

		const issue = data[0];
		this.setState({ issue });

		const comments = data[0].comments;
		this.setState({ comments });
	}

	handleAddComment = async () => {
		const comment = {
			description: this.state.newComment,
			date: new Date(),
			userId: this.state.user._id,
			userName: this.state.user.name,
			userImage: this.state.user.imageUrl
		};

		const comments = [comment, ...this.state.comments];
		this.setState({ comments });

		await axios.put(
			apiEndpoint + '/comment/' + this.props.match.params.id,
			comment
		);

		const newComment = '';
		this.setState({ newComment });
	};

	handleDeleteComment = commentID => {
		// const issues = [...this.state.issues];
		// const comments = this.state.issues[
		// 	this.props.match.params.id
		// ].comments.filter(comment => comment.commentID !== commentID);
		// issues[this.props.match.params.id].comments = [...comments];
		// this.setState({ issues });
	};

	handleSubmit = event => {
		event.preventDefault();
	};

	handleChange = ({ target: { name: key, value } }) => {
		this.setState({
			[key]: value
		});
	};

	getCommentDeleteButton = userId => {
		if (this.state.user._id === userId)
			return (
				<button
					className='btn btn-danger'
					onClick={() => this.handleDeleteComment()}
				>
					Delete
				</button>
			);
		else return null;
	};

	componentDidUpdate() {
		window.scrollTo(0, 0);
	}
	render() {
		const { issue, comments, newComment } = this.state;
		console.log(newComment);

		return (
			<div className='container my-5'>
				<Link className='btn btn-cz mb-3' to='/forum'>
					Go Back
				</Link>
				<h1>{issue.title}</h1>
				<p>{issue.description}</p>
				<div className='forum-comments mt-5'>
					<div className='mb-2'>
						<form onSubmit={this.handleSubmit} className='mb-2'>
							<div class='form-group'>
								<label for='exampleFormControlTextarea1'>Write a comment</label>
								<textarea
									class='form-control'
									id='exampleFormControlTextarea1'
									name='newComment'
									value={newComment}
									rows='3'
									onChange={this.handleChange}
								></textarea>
							</div>
							<button
								className='btn btn-cz align-right'
								onClick={this.handleAddComment}
							>
								Add a Comment
							</button>
						</form>
						<div className='row'>
							<div className='col-8'>
								<h3>Comments</h3>
							</div>
						</div>
					</div>
					{comments.map(comment => (
						<div key={comment._id} className='mb-2'>
							<div className='row'>
								<div className='col-8'>
									<Link className='text-dark' to={`/profile/${comment.userId}`}>
										<b>{comment.userName}</b>
									</Link>{' '}
									commented&nbsp;
									<b>
										<Moment fromNow>{comment.date}</Moment>
									</b>
									<br />
									{comment.description}
								</div>
								<div className='col-4'>
									{this.getCommentDeleteButton(comment.userId)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default ForumIssue;
