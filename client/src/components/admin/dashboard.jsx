import React from "react";
import SideBar from "./sidebar";
import { Route, Redirect } from "react-router-dom";
import Users from "./../users";
import DashboardDesc from "./dashboardDesc";
import Complains from "../complains";
import ComplainDetail from "../complainDetail";
import Ads from "./ads";
import Funds from "./funds";

const Dashboard = ({ match }) => {
	return (
		<div className="container my-5">
			<div className="mb-5">
				<SideBar />
			</div>
			<Route exact path="/dashboard/desc" component={DashboardDesc} />
			<Route exact path="/dashboard/users" component={Users} />
			<Route exact path="/dashboard/complain/:id" component={ComplainDetail} />
			<Route path="/dashboard/complains" component={Complains} />
			<Route path="/dashboard/ads" component={Ads} />
			<Route path="/dashboard/funds" component={Funds} />
			<Redirect from="/dashboard" to="/dashboard/desc" />
		</div>
	);
};

export default Dashboard;
