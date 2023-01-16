import React from "react";

const TextArea = ({ name, label, error, ...rest }) => {
	return (
		<div className="form-group">
			<label style={{ color: "#212529", float: "left" }} htmlFor={name}>
				{label}
			</label>
			<textarea
				{...rest}
				name={name}
				id={name}
				className="form-control"
				style={{ height: "150px" }}
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default TextArea;
