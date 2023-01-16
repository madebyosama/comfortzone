import React from 'react';
import { getCategory } from '../services/fundCategoryService';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../services/authService';
import Joi from 'joi-browser';
import Form from './common/form';

import { Link } from 'react-router-dom';
import axios from 'axios';

const apiEndpoint = 'http://localhost:5000/api/funds';

class FundForm extends Form {
	state = {
		data: {
			title: '',
			description: '',
			category: '',
			requiredAmount: null,
			raisedAmount: 0
		},
		errors: {},
		filename: 'Choose File',
		file: {},
		setUploadedFile: {},
		category: [],
		user: {}
	};

	schema = {
		title: Joi.string()
			.required()
			.min(25)
			.max(40)
			.label('Title'),
		description: Joi.string()
			.required()
			.min(50)
			.label('Description'),
		status: Joi.string().label('Status'),
		category: Joi.string()
			.required()
			.label('category'),
		requiredAmount: Joi.number().required(),
		raisedAmount: Joi.number().required()
	};
	async componentDidMount() {
		const category = getCategory();
		this.setState({ category });

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

	onFileChange = e => {
		const file = e.target.files[0];
		this.setState({ file });

		let filename = e.target.files[0].name;
		this.setState({ filename });
	};

	doSubmit = async () => {
		const formData = new FormData();
		formData.append('file', this.state.file);

		try {
			const res = await axios.post('http://localhost:5000/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});

			const { fileName, filePath } = res.data;

			const setUploadedFile = { fileName, filePath };
			this.setState({ setUploadedFile });

			console.log(setUploadedFile);
		} catch (err) {
			if (err.response.status === 500) {
				console.log('There was a problem with the server');
			} else {
				console.log(err.response.data.msg);
			}
		}

		const result = await axios.post(apiEndpoint, {
			...this.state.data,
			userId: this.state.user._id,
			userImage: this.state.user.imageUrl,
			userName: this.state.user.name,
			imageUrl: `http://localhost:3000${this.state.setUploadedFile.filePath}`
		});
		if (result) {
			toast.success('Your fund has been successfully received to us!');
		} else {
			toast.error('Oh something went wrong');
		}

		const data = { title: '', description: '' };

		this.setState({ data });
	};

	render() {
		return (
			<div className='container my-5'>
				<Link className='btn btn-cz mb-3' to='/fundraising'>
					Go Back
				</Link>
				<h1>Create a fund campaign</h1>
				<ToastContainer />
				<div className='container'>
					<form onSubmit={this.handleSubmit}>
						{this.renderInput(
							'title',
							'Title',
							'text',
							'Enter the title of the fund'
						)}
						{this.renderTextArea(
							'description',
							'Description',
							'text',
							'Enter the description of the fund'
						)}
						{this.renderInput(
							'requiredAmount',
							'Required Amount',
							'number',
							'Enter the required amount'
						)}
						<div className='row'>
							<div className='col-3'></div>
						</div>
						{this.renderSelect('category', 'Category', this.state.category)}

						<div className='custom-file mb-3'>
							<input
								type='file'
								className='custom-file-input'
								id='customFile'
								onChange={this.onFileChange}
							/>
							<label className='custom-file-label' htmlFor='customFile'>
								{this.state.filename}
							</label>
						</div>

						{this.renderButton('Submit')}
					</form>
				</div>
			</div>
		);
	}
}

export default FundForm;
