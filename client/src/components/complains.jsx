import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import axios from "axios";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
const apiEndpoint = "http://localhost:5000/api/complains";

class Complains extends Component {
	state = {
		complains: [],
		status: [
			{ _id: 0, name: "All" },
			{ _id: 1, name: "Resolved!" },
			{ _id: 2, name: "Pending..." }
		],
		pageSize: 5,
		currentPage: 1
	};

	async componentDidMount() {
		const { data: complains } = await axios.get(apiEndpoint);
		this.setState({ complains });
	}

	handleDelete = async complain => {
		const originalComplains = this.state.complains;
		const complains = this.state.complains.filter(c => c._id !== complain._id);

		this.setState({ complains });

		try {
			await axios.delete(apiEndpoint + "/" + complain._id);
			toast.success("The complain was successfully deleted!");
		} catch (ex) {
			toast.error("Failed to delete the complain!");
			this.setState({ complains: originalComplains });
		}
	};

	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	handleStatusSelect = status => {
		this.setState({ selectedStatus: status, currentPage: 1 });
		console.log(this.state.selectedStatus);
	};

	render() {
		const { complains: allComplains, pageSize, currentPage } = this.state;

		const filtered =
			this.state.selectedStatus && this.state.selectedStatus._id
				? allComplains.filter(i => i.status === this.state.selectedStatus.name)
				: allComplains;

		const complains = paginate(filtered, currentPage, pageSize);

		return (
			<React.Fragment>
				<div className="row">
					<ToastContainer />
					<div className="col-3">
						{
							<ListGroup
								items={this.state.status}
								onItemSelect={this.handleStatusSelect}
								selectedItem={this.state.selectedStatus}
							/>
						}
					</div>
					<div className="col-9">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Complains</th>
									<th scope="col">Posted by</th>
									<th scope="col">Status</th>
									<th scope="col">Delete</th>
								</tr>
							</thead>
							<tbody>
								{complains.map(complain => (
									<tr key={complain._id}>
										<th scope="row">{complains.indexOf(complain)}</th>
										<td>
											<Link to={`complain/${complain._id}`}>
												{complain.title}
											</Link>
										</td>
										<td></td>
										<td>{complain.status}</td>
										<td>
											<button
												className="btn btn-danger"
												onClick={() => this.handleDelete(complain)}
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<Pagination
							itemsCount={filtered.length}
							pageSize={pageSize}
							currentPage={currentPage}
							onPageChange={this.handlePageChange}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Complains;
