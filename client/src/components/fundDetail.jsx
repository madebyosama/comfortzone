import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import thousandRupees from '../assets/img/PKR_Rs_1000.jpg';
import FundDetailProgress from '../../src/components/pages/fundDetailProgress';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';

const apiEndpoint = 'http://localhost:5000/api/funds/';

class FundDetail extends Component {
	state = {
		fund: {},
		user: {}
	};

	async componentDidMount() {
		const { data: funds } = await axios.get(
			apiEndpoint + '/' + this.props.match.params.id
		);

		const fund = funds[0];
		this.setState({ fund });

		const { data } = await axios.get(
			'http://localhost:5000/api/users/' + '/' + this.state.fund.userId
		);
		const user = data[0];
		console.log(user);
		this.setState({ user });
	}
	renderAmount = fund => {
		if (fund.requiredAmount === 1000)
			return (
				<h3>
					<img src={thousandRupees} alt='thousandRupees' width='100px' /> x 1
				</h3>
			);
	};
	async handleToken(token) {
		const response = await axios.post('http://localhost:5000/api/pay/', {
			token,
			product: {
				name: 'Fund',
				price: 1,
				description: 'Fund Payment'
			}
		});
		const { status } = response.data;
		console.log('Response:', response.data);

		if (status === 'success') {
			toast('Success! Check email for details', { type: 'success' });
			await axios.put(
				'http://localhost:5000/api/funds/5e5975b0e3137d315c64418a',
				{ raisedAmount: 154, donations: 1 }
			);
			window.location.reload();
		} else {
			toast('Something went wrong', { type: 'error' });
		}
	}
	render() {
		const { fund } = this.state;
		return (
			<div className='container my-5'>
				<Link className='btn btn-cz mb-3' to='/fundraising'>
					Go Back
				</Link>

				<div className='row'>
					<div className='col-8'>
						<img
							style={{
								boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
								border: '0px',
								width: '45.7rem',
								height: '20.7rem',
								objectFit: 'cover'
							}}
							src={fund.imageUrl}
							className='rounded mx-auto d-block'
							alt='...'
						/>
						<div
							className='card text-left mt-4'
							style={{
								boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
								border: '0px'
							}}
						>
							<div className='card-body'>
								<h4
									className='card-title'
									style={{
										marginBottom: '2px',
										fontFamily: 'Proxima Nova',
										fontSize: '30px',
										color: 'apple.com159570'
									}}
								>
									{fund.title}
								</h4>
								<p
									className='card-text'
									style={{
										marginBottom: '2px',
										fontFamily: 'Proxima Nova',
										fontSize: '18px',
										color: 'apple.com2e2e2e'
									}}
								>
									{fund.description}
								</p>
							</div>
						</div>
					</div>

					<div className='col-4'>
						<div className='row align-self-center justify-content-center text-center'>
							<FundDetailProgress
								requiredAmount={fund.requiredAmount}
								raisedAmount={fund.raisedAmount}
								donations={fund.donations}
							/>
						</div>
						<div className='row align-self-center justify-content-center text-center'>
							<div>
								<StripeCheckout
									style={{ float: 'left' }}
									stripeKey='pk_test_w433bBxBkSoMrsjcU3Tkmy2w00WzDBwp1J'
									token={this.handleToken}
									amount={1 * 100}
									name='Comfort Zone'
									image='http://localhost:3000/uploads/payment-logo.jpg'
									label='Donate'
								/>
							</div>
						</div>
						<ToastContainer />
						<div className='row align-self-center justify-content-center text-center w-0'>
							<div
								className='card text-left mt-4 pt-5 pb-5'
								style={{
									boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
									border: '0px'
								}}
							>
								<div className='card-body' style={{ width: '385px' }}>
									<h4
										className='card-title'
										style={{
											marginBottom: '2px',
											fontFamily: 'Proxima Nova',
											fontSize: '30px',
											color: '#159570'
										}}
									>
										<img
											style={{
												boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
												// border: '0px',
												// width: '100%',
												height: '10rem',
												objectFit: 'cover',
												borderRadius: '50%'
											}}
											src={this.state.user.imageUrl}
											className='mx-auto d-block'
											alt='...'
										/>
									</h4>
									<div className='row mt-3 ml-2'>
										<div className='col-5'>
											<p
												className='card-text text-right'
												style={{
													marginBottom: '2px',
													fontFamily: 'Proxima Nova',
													fontSize: '20px',
													color: '#343434'
												}}
											>
												Name:
											</p>
										</div>
										<div className='col-6'>
											<p
												className='card-text text-left'
												style={{
													marginBottom: '2px',
													fontFamily: 'Proxima Nova',
													fontSize: '20px',
													color: '#159570'
												}}
											>
												{this.state.user.name}
											</p>
										</div>
									</div>
									<div className='row mt-1 ml-2'>
										<div className='col-5'>
											<p
												className='card-text text-right'
												style={{
													marginBottom: '2px',
													fontFamily: 'Proxima Nova',
													fontSize: '20px',
													color: '#343434'
												}}
											>
												Phone:
											</p>
										</div>
										<div className='col-6'>
											<p
												className='card-text text-left'
												style={{
													marginBottom: '2px',
													fontFamily: 'Proxima Nova',
													fontSize: '20px',
													color: '#159570'
												}}
											>
												{this.state.user.phone}
											</p>
										</div>
									</div>
									<div className='row mt-1 ml-2'>
										<div className='col-5'>
											<p
												className='card-text text-right'
												style={{
													marginBottom: '2px',
													fontFamily: 'Proxima Nova',
													fontSize: '20px',
													color: '#343434'
												}}
											>
												Sector:
											</p>
										</div>
										<div className='col-6'>
											<p
												className='card-text text-left'
												style={{
													marginBottom: '2px',
													fontFamily: 'Proxima Nova',
													fontSize: '20px',
													color: '#159570'
												}}
											>
												{this.state.user.sector}
											</p>
										</div>
									</div>
									<div className='row mt-1 ml-2'>
										<div className='col-5'>
											<p
												className='card-text text-right'
												style={{
													marginBottom: '2px',
													fontFamily: 'Proxima Nova',
													fontSize: '24px',
													color: '#343434'
												}}
											>
												Address:
											</p>
										</div>
										<div className='col-6'>
											<p
												className='card-text text-left'
												style={{
													marginBottom: '2px',
													fontFamily: 'Proxima Nova',
													fontSize: '16px',
													color: '#159570'
												}}
											>
												{this.state.user.address}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FundDetail;
