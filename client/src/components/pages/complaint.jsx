import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Joi from 'joi-browser';
import Form from '../common/form';
import Popup from 'reactjs-popup';
import axios from 'axios';
const apiEndpoint = 'http://localhost:5000/api/complains';

class Complaint extends Form {
	state = {
		data: { title: '', description: '', status: 'Pending...' },
		errors: {},
		categories: [
			{ id: 0, name: 'Problems' },
			{ id: 1, name: 'Suggestions' }
		]
	};

	schema = {
		title: Joi.string()
			.required()
			.min(15)
			.label('Title'),
		description: Joi.string()
			.required()
			.min(50)
			.label('Description'),
		status: Joi.string().label('Status')
	};

	doSubmit = async () => {
		const result = await axios.post(apiEndpoint, {
			...this.state.data
		});
		if (result) {
			toast.success('Your complain has been successfully received to us!');
		} else {
			toast.error('Oh something went wrong');
		}
	};

	render() {
		return (
			<React.Fragment>
				<div className='subheader-complaint py-5 text-white'>
					<div className='align-self-center justify-content-center text-center'>
						<div>
							<h1>Have a complain?</h1>
						</div>
						<div>
							<p>
								Not satisfied with something or have some issues in the society?
							</p>
						</div>
						<Popup
							trigger={<button className='btn btn-cz'> Quick Complain</button>}
							position='right center'
						>
							<form onSubmit={this.handleSubmit}>
								{this.renderInput(
									'title',
									'Title',
									'text',
									'Enter the title of the complain'
								)}
								{this.renderTextArea(
									'description',
									'Description',
									'text',
									'Enter the description of the complain'
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
					<h1>Post your complain here!</h1>
					<form onSubmit={this.handleSubmit}>
						{this.renderInput(
							'title',
							'Title',
							'text',
							'Enter the title of the complain'
						)}
						{this.renderTextArea(
							'description',
							'Description',
							'text',
							'Enter the description of the complain'
						)}
						<div className='row'>
							<div className='col-3'></div>
						</div>
						{this.renderButton('Submit')}
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default Complaint;
