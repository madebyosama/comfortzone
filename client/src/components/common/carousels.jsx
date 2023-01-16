import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousels.css';

class Carousels extends Component {
	state = {};
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<img
						className='w-100'
						src={require('../../assets/img/subheaders/billing.jpg')}
						alt='First slide'
					/>
					<Carousel.Caption>
						<h3 className='carouselTitle'>Billing System</h3>
						<p className='carouselDesc'>
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='w-100'
						src={require('../../assets/img/subheaders/forum.jpg')}
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3 className='carouselTitle'>Chat Forum</h3>
						<p className='carouselDesc'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='w-100'
						src={require('../../assets/img/subheaders/complaint.jpg')}
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3 className='carouselTitle'>Complaint Portal</h3>
						<p className='carouselDesc'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='w-100'
						src={require('../../assets/img/subheaders/fundraising.jpg')}
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3 className='carouselTitle'>Fundraising</h3>
						<p className='carouselDesc'>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='w-100'
						src={require('../../assets/img/subheaders/ad.jpg')}
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3 className='carouselTitle'>Advertisement</h3>
						<p className='carouselDesc'>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default Carousels;
