import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userImg from '../../assets/img/dashboard/users.jpg';
import complainImg from '../../assets/img/dashboard/complains.jpg';
import fundImg from '../../assets/img/dashboard/funds.jpg';
import adImg from '../../assets/img/dashboard/ads.jpg';

const DashboardDesc = () => {
	return (
		<div className='my-5 text-center'>
			<h1>Welcome! Admin</h1>
			<p>
				We are glad that you are here. Lets manage some people, events and other
				stuff. Are you ready?
			</p>
			<div className='row my-5'>
				<div className='col-3'>
					<Card style={{ width: '17rem' }}>
						<Link to='/dashboard/users'>
							<Card.Img variant='top' src={userImg} />
						</Link>
						<Card.Body>
							<Card.Title>Users</Card.Title>
							<Card.Text>Manage all the users from the dashboard.</Card.Text>
							<Link
								className='btn btn-cz'
								to='/dashboard/users'
								variant='primary'
							>
								Manage now
							</Link>
						</Card.Body>
					</Card>
				</div>
				<div className='col-3'>
					<Card style={{ width: '17rem' }}>
						<Link to='/dashboard/complains'>
							<Card.Img variant='top' src={complainImg} />
						</Link>

						<Card.Body>
							<Card.Title>Complains</Card.Title>
							<Card.Text>
								Manage all the complains from the dashboard.
							</Card.Text>
							<Link
								className='btn btn-cz'
								to='/dashboard/complains'
								variant='primary'
							>
								Manage now
							</Link>
						</Card.Body>
					</Card>
				</div>
				<div className='col-3'>
					<Card style={{ width: '17rem' }}>
						<Link to='/dashboard/funds'>
							<Card.Img variant='top' src={fundImg} />
						</Link>
						<Card.Body>
							<Card.Title>Funds</Card.Title>
							<Card.Text>Manage all the funds from the dashboard.</Card.Text>
							<Link
								className='btn btn-cz'
								to='/dashboard/funds'
								variant='primary'
							>
								Manage now
							</Link>
						</Card.Body>
					</Card>
				</div>
				<div className='col-3'>
					<Card style={{ width: '17rem' }}>
						<Link to='/dashboard/ads'>
							<Card.Img variant='top' src={adImg} />
						</Link>
						<Card.Body>
							<Card.Title>Ads</Card.Title>
							<Card.Text>Manage all the ads from the dashboard.</Card.Text>
							<Link
								className='btn btn-cz'
								to='/dashboard/ads'
								variant='primary'
							>
								Manage now
							</Link>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default DashboardDesc;
