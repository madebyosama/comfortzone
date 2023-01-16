import React from 'react';
import axios from 'axios';
import auth from '../../services/authService';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { paginate } from '../../utils/paginate';
import Popup from 'reactjs-popup';
import Joi from 'joi-browser';
import Form from '../common/form';
import Issue from './../issue';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroups';
const apiEndpoint = 'http://localhost:5000/api/issues';

class Forum extends Form {
	state = {
		issues: [],
		categories: [
			{ name: 'All' },
			{ _id: 1, name: 'Problems' },
			{ _id: 2, name: 'Suggestions' },
			{ _id: 3, name: 'Emergencies' }
		],
		pageSize: 5,
		currentPage: 1,
		user: {},
		data: {
			title: '',
			description: '',
			comments: []
		},
		errors: {}
	};

	schema = {
		title: Joi.string()
			.required()
			.min(10)
			.label('Title'),
		description: Joi.string()
			.required()
			.min(20)
			.label('Description'),
		comments: Joi.label('Comments')
	};

	async componentDidMount() {
		const { data: issues } = await axios.get(apiEndpoint);
		this.setState({ issues });

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
	}

	// handleSubmit = () => {
	// 	console.log("Aoo");
	// };

	handleAdd = () => {
		return (
			<Popup
				trigger={<button className='btn btn-czo'> Add an issue</button>}
				position='right center'
			></Popup>
		);
	};

	handleDelete = async issue => {
		const originalIssues = this.state.issues;
		const issues = this.state.issues.filter(i => i._id !== issue._id);

		this.setState({ issues });

		try {
			await axios.delete(apiEndpoint + '/' + issue._id);
			toast.success('Your issue was successfully deleted!');
		} catch (ex) {
			toast.error('Failed to delete the complain!');
			this.setState({ issues: originalIssues });
		}
	};

	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	handleCategorySelect = category => {
		this.setState({ selectedCategory: category, currentPage: 1 });
		console.log(this.state.selectedCategory);
	};

	doSubmit = async () => {
		const result = await axios.post(apiEndpoint, {
			...this.state.data,
			userId: this.state.user._id,
			userImage: this.state.user.imageUrl,
			userName: this.state.user.name,
			date: new Date()
		});

		if (result) {
			toast.success('Your issue has been successfully added to list!');
		} else {
			toast.error('Oh something went wrong');
		}
		const issue = result.data.data;

		const issues = [issue, ...this.state.issues];
		this.setState({ issues });
	};

	render() {
		const { issues: allIssues, pageSize, currentPage } = this.state;

		const filtered =
			this.state.selectedCategory && this.state.selectedCategory._id
				? allIssues.filter(i => i.category === this.state.selectedCategory.name)
				: allIssues;

		const issues = paginate(filtered, currentPage, pageSize);
		return (
			<div>
				<div className='subheader-forum py-5 text-white'>
					<div className='align-self-center justify-content-center text-center'>
						<div>
							<h1>Chat Forum</h1>
						</div>
						<div>
							<p>
								Use this forum to add issues, find issues and comment on issues.
							</p>
						</div>
						<Popup
							trigger={<button className='btn btn-cz'> Add an issue</button>}
							position='right center'
						>
							<form onSubmit={this.handleSubmit}>
								{this.renderInput(
									'title',
									'Title',
									'text',
									'Enter the title of the issue'
								)}
								{this.renderTextArea(
									'description',
									'Description',
									'text',
									'Enter the description of the issue'
								)}
								<div className='row'>
									<div className='col-3'></div>
								</div>
								{this.renderButton('Submit')}
							</form>
						</Popup>
					</div>
				</div>
				<ToastContainer />

				<div className='container my-5'>
					<div className='row'>
						<div className='col-3'>
							<ListGroup
								items={this.state.categories}
								onItemSelect={this.handleCategorySelect}
								selectedItem={this.state.selectedCategory}
							/>
						</div>

						<div className='col'>
							{issues.map(issue => (
								<div key={issue._id}>
									<Issue
										_id={issue._id}
										title={issue.title}
										description={issue.description}
										date={issue.date}
										currentUserId={this.state.user._id}
										userId={issue.userId}
										userName={issue.userName}
										userImage={issue.userImage}
										onDelete={() => this.handleDelete(issue)}
									/>
								</div>
							))}
							<div>
								<div className='container my-3'>
									<Pagination
										itemsCount={filtered.length}
										pageSize={pageSize}
										currentPage={currentPage}
										onPageChange={this.handlePageChange}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Forum;
