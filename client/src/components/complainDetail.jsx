import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
const apiEndpoint = "http://localhost:5000/api/complains";

class ComplainDetail extends Component {
	state = {
		complain: {}
	};

	async componentDidMount() {
		const { data } = await axios.get(
			apiEndpoint + "/id/" + this.props.match.params.id
		);
		const complain = data[0];
		this.setState({ complain });
	}

	renderButton(complain) {
		if (complain.status === "Resolved!")
			return (
				<button
					className="btn btn-danger"
					onClick={() => this.handleStatus(complain)}
				>
					Update to Pending...
				</button>
			);
		else
			return (
				<button
					className="btn btn-cz"
					onClick={() => this.handleStatus(complain)}
				>
					Update to Resolved!
				</button>
			);
	}

	handleStatus = async complain => {
		if (complain.status === "Pending...") {
			await axios.put(apiEndpoint + "/" + complain._id, {
				status: "Resolved!"
			});

			const { data } = await axios.get(apiEndpoint + "/id/" + complain._id);
			const updatedComplain = data[0];
			this.setState({ complain: updatedComplain });

			toast.success("This complain is successfully resolved!");
		} else {
			await axios.put(apiEndpoint + "/" + complain._id, {
				status: "Pending..."
			});

			const { data } = await axios.get(apiEndpoint + "/id/" + complain._id);

			const updatedComplain = data[0];
			this.setState({ complain: updatedComplain });

			toast.error("This complain is now added to the pending...");
		}
	};

	render() {
		const { complain } = this.state;
		return (
			<React.Fragment>
				<div className="container">
					<ToastContainer />
					<Link className="btn btn-cz mb-3" to="/dashboard/complains">
						Go Back
					</Link>
					<div className="row">
						<div className="col-9">
							<h3 style={{ color: "#159570" }}>{complain.title}</h3>
							<h6
								style={{
									color: "#2E2E2E"
								}}
							>
								{complain.description}
							</h6>
						</div>
						<div className="col-3">
							<h1 style={{ color: "#159570" }}>Status</h1>
							<h1 style={{ color: "#2E2E2E" }}>{complain.status}</h1>
							<div className="my-3">{this.renderButton(complain)}</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default ComplainDetail;
