import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FundCard = ({
	_id,
	title,
	description,
	imgUrl,
	requiredAmount,
	raisedAmount
}) => {
	function getProgressBar() {
		const now = (raisedAmount / requiredAmount) * 100;
		const progressInstance = (
			<ProgressBar now={now} label={`${Math.ceil(now)}%`} />
		);
		return progressInstance;
	}
	return (
		<Card style={{ width: '17rem' }}>
			<Link to={`/fundraising/${_id}`}>
				<Card.Img variant='top' src={imgUrl} />
			</Link>

			<Card.Body>
				<Card.Title
					style={{
						lineHeight: '1.5em',
						height: '3em',
						overflow: 'hidden',
						textOverflow: 'ellipsis'
					}}
				>
					<Link to={`/fundraising/${_id}`} style={{ color: 'black' }}>
						{title}
					</Link>
				</Card.Title>
				<Card.Text
					style={{
						width: '200px',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis'
					}}
				>
					{description}
				</Card.Text>
				{getProgressBar()}
				<Card.Text
					style={{
						width: '200px',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis'
					}}
				>
					<b>Rs. {raisedAmount} Raised</b> of Rs. {requiredAmount}
				</Card.Text>
				<Link
					className='btn btn-cz'
					to={`/fundraising/${_id}`}
					variant='primary'
				>
					Donate
				</Link>
				<Link
					style={{ float: 'right' }}
					className='btn btn-czo'
					to={`/fundraising/${_id}`}
					variant='primary'
				>
					Read Details
				</Link>
			</Card.Body>
		</Card>
	);
};

export default FundCard;
