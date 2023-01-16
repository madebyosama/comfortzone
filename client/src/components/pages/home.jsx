import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousels from './../common/carousels';

class Home extends Component {
	state = {};
	render() {
		return (
			<div>
				<Carousels />
				<div className='row landing-page-section-lighter'>
					<div className='col-6'>
						<h1>Billing System</h1>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
							sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
							ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
							lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
							Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
							finibus magna. Nunc pharetra lectus at turpis consequat, nec
							porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
							sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
							rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
							auctor euismod. Aenean id nisi in odio pretium maximus.
						</p>
						<Link to='/billing' className='btn btn-cz disabled'>
							Pay Your Bill
						</Link>
					</div>
					<div className='col-6 align-self-center justify-content-center text-center'>
						<img src={require('../../assets/icons/icon-billing.svg')} alt='' />
					</div>
				</div>
				<div className='row landing-page-section-darker'>
					<div className='col-6 align-self-center justify-content-center text-center'>
						<img src={require('../../assets/icons/icon-forum.svg')} alt='' />
					</div>
					<div className='col-6'>
						<h1>Chat Forum</h1>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
							sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
							ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
							lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
							Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
							finibus magna. Nunc pharetra lectus at turpis consequat, nec
							porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
							sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
							rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
							auctor euismod. Aenean id nisi in odio pretium maximus.
						</p>
						<Link to='/forum' className='btn btn-cz disabled'>
							Take Part in Discussion
						</Link>
					</div>
				</div>
				<div className='row landing-page-section-lighter'>
					<div className='col-6'>
						<h1>Complaint System</h1>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
							sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
							ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
							lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
							Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
							finibus magna. Nunc pharetra lectus at turpis consequat, nec
							porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
							sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
							rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
							auctor euismod. Aenean id nisi in odio pretium maximus.
						</p>
						<Link to='/complaint' className='btn btn-cz disabled'>
							Complain Now
						</Link>
					</div>
					<div className='col-6 align-self-center justify-content-center text-center'>
						<img src={require('../../assets/icons/icon-complain.svg')} alt='' />
					</div>
				</div>
				<div className='row landing-page-section-darker'>
					<div className='col-6 align-self-center justify-content-center text-center'>
						<img
							src={require('../../assets/icons/icon-fundraising.svg')}
							alt=''
						/>
					</div>
					<div className='col-6'>
						<h1>Fundraising</h1>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
							sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
							ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
							lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
							Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
							finibus magna. Nunc pharetra lectus at turpis consequat, nec
							porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
							sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
							rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
							auctor euismod. Aenean id nisi in odio pretium maximus.
						</p>
						<Link to='/fundraising' className='btn btn-cz disabled'>
							Donate
						</Link>
					</div>
				</div>
				<div className='row landing-page-section-lighter'>
					<div className='col-6'>
						<h1>Facility Corner</h1>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
							sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
							ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
							lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
							Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
							finibus magna. Nunc pharetra lectus at turpis consequat, nec
							porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
							sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
							rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
							auctor euismod. Aenean id nisi in odio pretium maximus.
						</p>
						<Link to='/facility-corner' className='btn btn-cz disabled'>
							Hire Workers
						</Link>
					</div>
					<div className='col-6 align-self-center justify-content-center text-center'>
						<img src={require('../../assets/icons/icon-facility.svg')} alt='' />
					</div>
				</div>
				<div className='row landing-page-section-darker'>
					<div className='col-6 align-self-center justify-content-center text-center'>
						<img src={require('../../assets/icons/icon-tracking.svg')} alt='' />
					</div>
					<div className='col-6'>
						<h1>Garbage Tracking</h1>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
							sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
							ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
							lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
							Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
							finibus magna. Nunc pharetra lectus at turpis consequat, nec
							porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
							sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
							rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
							auctor euismod. Aenean id nisi in odio pretium maximus.
						</p>
						<Link to='/garbage-tracking' className='btn btn-cz disabled'>
							Track Garbage Truck
						</Link>
					</div>
				</div>
				<div className='row landing-page-section-lighter'>
					<div className='col-6'>
						<h1>Security System</h1>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
							sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
							ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
							lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
							Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
							finibus magna. Nunc pharetra lectus at turpis consequat, nec
							porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
							sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
							rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
							auctor euismod. Aenean id nisi in odio pretium maximus.
						</p>
						<Link to='/security' className='btn btn-cz disabled'>
							Send Security Notification
						</Link>
					</div>
					<div className='col-6 align-self-center justify-content-center text-center'>
						<img src={require('../../assets/icons/icon-facility.svg')} alt='' />
					</div>
				</div>
				<div className='row landing-page-section-darker'>
					<div className='col-6 align-self-center justify-content-center text-center'>
						<img src={require('../../assets/icons/icon-facility.svg')} alt='' />
					</div>
					<div className='col-6'>
						<h1>Election System</h1>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
							sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
							ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
							lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
							Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
							finibus magna. Nunc pharetra lectus at turpis consequat, nec
							porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
							sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
							rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
							auctor euismod. Aenean id nisi in odio pretium maximus.
						</p>
						<Link to='/election' className='btn btn-cz disabled'>
							Apply For Election
						</Link>
					</div>
				</div>
				<div className='row landing-page-section-lighter'>
					<div className='col-6'>
						<h1>Tendor and Auction</h1>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
							sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
							ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
							lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
							Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
							finibus magna. Nunc pharetra lectus at turpis consequat, nec
							porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
							sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
							rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
							auctor euismod. Aenean id nisi in odio pretium maximus.
						</p>
						<Link to='/tendor' className='btn btn-cz disabled'>
							Bid Now
						</Link>
					</div>
					<div className='col-6 align-self-center justify-content-center text-center'>
						<img src={require('../../assets/icons/icon-tracking.svg')} alt='' />
					</div>
				</div>
				<div className='row landing-page-section-darker'>
					<div className='col-6 align-self-center justify-content-center text-center'>
						<img src={require('../../assets/icons/icon-ad.svg')} alt='' />
					</div>
					<div className='col-6'>
						<h1>Advertisement</h1>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
							sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
							ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
							lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
							Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
							finibus magna. Nunc pharetra lectus at turpis consequat, nec
							porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
							sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
							rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
							auctor euismod. Aenean id nisi in odio pretium maximus.
						</p>
						<Link to='/advertisement' className='btn btn-cz disabled'>
							Sell or Buy Items
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
