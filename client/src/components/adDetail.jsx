import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiEndpoint = 'http://localhost:5000/api/ads/';

class AdDetail extends Component {
	state = {
		ad: {}
	};

	async componentDidMount() {
		const { data } = await axios.get(
			apiEndpoint + '/' + this.props.match.params.id
		);

		const ad = data[0];
		this.setState({ ad });
	}

	render() {
		const { ad } = this.state;
		return (
			<div className='container my-5'>
				<Link className='btn btn-cz mb-3' to='/advertisement'>
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
							src={ad.imageUrl1}
							className='rounded mx-auto d-block'
							alt='...'
						/>
						<div className='row mt-4'>
							<div className='col-4'>
								<img
									style={{
										boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
										border: '0px',
										width: '100%',
										height: '10rem',
										objectFit: 'cover'
									}}
									src={ad.imageUrl2}
									className='rounded mx-auto d-block'
									alt='...'
								/>
							</div>
							<div className='col-4'>
								<img
									style={{
										boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
										border: '0px',
										width: '100%',
										height: '10rem',
										objectFit: 'cover'
									}}
									src={ad.imageUrl3}
									className='rounded mx-auto d-block'
									alt='...'
								/>
							</div>
							<div className='col-4'>
								<img
									style={{
										boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
										border: '0px',
										width: '100%',
										height: '10rem',
										objectFit: 'cover'
									}}
									src={ad.imageUrl4}
									className='rounded mx-auto d-block'
									alt='...'
								/>
							</div>
						</div>
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
									{ad.title}
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
									{ad.description}
								</p>
							</div>
						</div>
					</div>
					<div className='col-4'>
						<div
							className='card text-center'
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
									Price: Rs. {ad.requiredAmount}
								</h4>
							</div>
						</div>
						<div
							className='card text-center mt-4'
							style={{
								boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
								border: '0px'
							}}
						>
							<div className='card-body'>
								<a
									href='tel:03073794329'
									className='btn btn-cz btn-lg-new btn-lg w-100'
								>
									<i className='fa fa-phone'></i> {ad.userPhone}
								</a>
								<a
									href='mailto:harismehmood@comfortzone.pk'
									className='btn btn-cz btn-lg-new btn-lg mt-2 w-100'
								>
									<i className='fa fa-envelope'></i> Send a message
								</a>
							</div>
						</div>
						<div
							className='card text-center mt-4'
							style={{
								boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
								border: '0px'
							}}
						>
							<div className='card-body'>
								<a
									href='apple.com'
									className='btn btn-cz btn-lg-new btn-lg mt-2 w-100'
								>
									<i className='fa fa-info'></i> Seller Info
								</a>
								<h4
									className='card-title mt-4'
									style={{
										marginBottom: '2px',
										fontFamily: 'Proxima Nova',
										fontSize: '24px',
										color: 'apple.com159570'
									}}
								>
									Name: {ad.userName}
								</h4>
								<h4
									className='card-title mt-2'
									style={{
										marginBottom: '2px',
										fontFamily: 'Proxima Nova',
										fontSize: '24px',
										color: 'apple.com159570'
									}}
								>
									Phone: {ad.userPhone}
								</h4>
							</div>
						</div>
						<div
							className='card text-center mt-4'
							style={{
								boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
								border: '0px'
							}}
						>
							<div className='card-body'>
								<a
									href='apple.com'
									className='btn btn-cz btn-lg-new btn-lg mt-2 w-100'
								>
									<i className='fa fa-alert'></i> Safety Precautions
								</a>
								<h4
									className='card-title mt-4 text-left'
									style={{
										marginBottom: '2px',
										fontFamily: 'Proxima Nova',
										fontSize: '18px',
										color: 'apple.com159570'
									}}
								>
									<ol>
										<li>Use a safe location to meet seller</li>
										<li>Avoid cash transactions</li>
										<li>Beware of unrealistic offers</li>
									</ol>
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AdDetail;
