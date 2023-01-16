import React from "react";

const ApprovalCard = ({
	title,
	description,
	requiredAmount,
	handleAccept,
	handleReject
}) => {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<button className="btn btn-cz" onClick={handleAccept}>
						Approve
					</button>
					<button className="btn btn-danger float-right" onClick={handleReject}>
						Reject
					</button>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;
