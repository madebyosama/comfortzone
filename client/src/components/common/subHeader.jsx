import React from "react";

const SubHeader = ({ classes, title, desc, onAddButton, buttonTitle }) => {
	return (
		<div className={classes}>
			<div className="align-self-center justify-content-center text-center">
				<div>
					<h1>{title}</h1>
				</div>
				<div>
					<p>{desc}</p>
				</div>
				<button className="btn btn-czo" onClick={onAddButton}>
					{buttonTitle}
				</button>
			</div>
		</div>
	);
};

export default SubHeader;
