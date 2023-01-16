import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdCard = ({ _id, title, description, imageUrl, price }) => {
	return (
		<Card style={{ width: '73rem' }}>
			<Link to={`/advertisement/${_id}`}>
				<Card.Img style={{ height: '300px' }} variant='top' src={imageUrl} />

				<Card.ImgOverlay>
					<button className='btn btn-cz float-right'>Rs. {price}</button>
				</Card.ImgOverlay>
			</Link>
			<Card.Body>
				<div className='row'>
					<div className='col-6'>
						<Link to={`/advertisement/${_id}`} style={{ color: 'black' }}>
							<Card.Title>{title}</Card.Title>
						</Link>
						<Card.Text
							style={{
								lineHeight: '1.5em',
								height: '3em',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'no wrap'
							}}
						>
							{description}
						</Card.Text>
					</div>
					<div className='col-6'>
						<div className='row '>
							<div className='col-9'></div>
							<div className='col-3'>
								<Link
									className='btn btn-cz float-right'
									to={`/advertisement/${_id}`}
								>
									Contact Seller
								</Link>
								{/* <h4 className='float-right mt-2'>Osama</h4> */}
							</div>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default AdCard;
