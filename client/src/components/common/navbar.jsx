import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const Navbar = ({ user }) => {
	return (
		// <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
		<nav className='navbar navbar-expand-lg navbar-cz sticky-top'>
			<Link to='/' className='navbar-brand'>
				<img src={require('../../assets/img/logo-01.png')} alt='' />
			</Link>
			<div className='collapse navbar-collapse'>
				<div className='navbar-nav ml-auto'>
					{/* <NavLink className='nav-item nav-link' to='/facility-corner'>
						Facility Corner
					</NavLink>
					<NavLink className='nav-item nav-link' to='/garbage-tracking'>
						Garbage Tracking
					</NavLink>
					<NavLink className='nav-item nav-link' to='/security'>
						Security
					</NavLink>
					<NavLink className='nav-item nav-link' to='/elections'>
						Elections
					</NavLink>
					<NavLink className='nav-item nav-link' to='/tender'>
						Tender
					</NavLink> */}

					{!user && (
						<React.Fragment>
							<NavLink className='nav-item nav-link' to='/login'>
								Login
							</NavLink>
							<NavLink className='nav-item nav-link' to='/register'>
								Register
							</NavLink>
						</React.Fragment>
					)}
					{user && (
						<React.Fragment>
							<NavLink className='nav-item nav-link' to='/billing'>
								Billing
							</NavLink>
							<NavLink className='nav-item nav-link' to='/forum'>
								Forum
							</NavLink>
							<NavLink className='nav-item nav-link' to='/complaint'>
								Complaint
							</NavLink>
							<NavLink className='nav-item nav-link' to='/fundraising'>
								Fundraising
							</NavLink>
							<NavLink className='nav-item nav-link' to='/advertisement'>
								Advertisement
							</NavLink>
							<NavLink className='nav-item nav-link' to='/profile'></NavLink>

							<NavDropdown
								title={
									<img
										src={user.imageUrl}
										width='25'
										height='25'
										className='avatar d-inline-block align-top'
										alt='React Bootstrap logo'
									/>
								}
								id='basic-nav-dropdown'
							>
								<NavDropdown.Item href='#action/3.1'>
									Logged in as:
									<br />
									{user.name}
								</NavDropdown.Item>
								<NavDropdown.Divider />

								<NavLink
									className='nav-item nav-link ml-3 dropdown-nav-item'
									to='/dashboard'
								>
									Dashboard
								</NavLink>
								<NavDropdown.Divider />
								<NavLink
									className='nav-item nav-link ml-3 dropdown-nav-item'
									to='/logout'
								>
									Logout
								</NavLink>
							</NavDropdown>
						</React.Fragment>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
