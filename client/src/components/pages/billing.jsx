import React, { Component } from 'react';
import axios from 'axios';
import auth from '../../services/authService';
import GenerateBill from './../generateBill';
import PaidBill from './../paidBill';
import { PDFViewer } from '@react-pdf/renderer';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';

class Billing extends Component {
	state = {
		user: {},
		bill: [],
		product: {}
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
			'http://localhost:5000/api/bills/' + this.state.user._id
		);
		const bill = data;
		this.setState({ bill });
		document.getElementsByTagName('iframe')[0].style.width = '100%';
		document.getElementsByTagName('iframe')[0].style.height = '720px';
	}
	updateBill() {
		const bill = this.state.bill;
		console.log(bill);
		bill[0].isPaid = true;
		this.setState({ bill });
	}
	async handleToken(token) {
		const response = await axios.post('http://localhost:5000/api/pay/', {
			token,
			product: {
				name: 'Bill',
				price: 7.24,
				description: 'Bill payment'
			}
		});
		const { status } = response.data;
		console.log('Response:', response.data);
		if (status === 'success') {
			await axios.put(
				'http://localhost:5000/api/bills/5e4bfdb959f0034b4c9e4052',
				{ isPaid: true }
			);
			toast('Success! Check email for details', { type: 'success' });
			window.location.reload();
		} else {
			toast('Something went wrong', { type: 'error' });
		}
	}

	getButton() {
		return (
			<StripeCheckout
				stripeKey='pk_test_w433bBxBkSoMrsjcU3Tkmy2w00WzDBwp1J'
				token={this.handleToken}
				amount={(1120 / 154) * 100}
				name='Comfort Zone'
				image='http://localhost:3000/uploads/payment-logo.jpg'
				label='Pay Bill Online'
			/>
		);
	}
	getButton1() {
		return (
			<StripeCheckout
				stripeKey='pk_test_w433bBxBkSoMrsjcU3Tkmy2w00WzDBwp1J'
				token={this.handleToken}
				amount={1120 * 100}
				name='Comfort Zone'
				image='http://localhost:3000/uploads/payment-logo.jpg'
				label='Your bill is paid!'
			/>
		);
	}

	render() {
		const { bill } = this.state;
		const thisBill = bill[0];
		console.log(thisBill);
		if (bill.length === 0) return null;
		else if (thisBill.isPaid === false)
			return (
				<div>
					<ToastContainer />
					<div className='subheader-billing py-5 text-white'>
						<div className='align-self-center justify-content-center text-center'>
							<div>
								<h1>Now paying bill is easier!</h1>
							</div>
							<div>
								<p>Make your bill payment from home with the secure method.</p>
							</div>
							{this.getButton()}
						</div>
					</div>
					<div className='container my-5'>
						<div>
							<PDFViewer>
								<GenerateBill
									userName={this.state.user.name}
									id={thisBill._id}
									dateOfIssue={thisBill.dateOfIssue}
									dueDate={thisBill.dueDate}
									arrearAmount={thisBill.arrearAmount}
									waterCharges={thisBill.waterCharges}
									conservancyCharges={thisBill.conservancyCharges}
									streetLightCharges={thisBill.streetLightCharges}
									roadMaintenanceCharges={thisBill.roadMaintenanceCharges}
									graveyardCharges={thisBill.graveyardCharges}
									electricityCharges={thisBill.electricityCharges}
									totalAmount={thisBill.electricityCharges}
									dueAmount={thisBill.dueAmount}
								/>
							</PDFViewer>
						</div>
					</div>
				</div>
			);
		else
			return (
				<div>
					<ToastContainer />
					<div className='subheader-billing py-5 text-white'>
						<div className='align-self-center justify-content-center text-center'>
							<div>
								<h1>Now paying bill is easier!</h1>
							</div>
							<div>
								<p>Make your bill payment from home with the secure method.</p>
							</div>
							{this.getButton1()}
						</div>
					</div>
					<div className='container my-5'>
						<div>
							<PDFViewer>
								<PaidBill />
							</PDFViewer>
						</div>
					</div>
				</div>
			);
	}
}

export default Billing;
