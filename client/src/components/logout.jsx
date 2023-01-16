import { Component } from 'react';
import auth from '../services/authService';

class Logout extends Component {
	componentDidMount() {
		auth.logout(0);
		window.location = '/';
	}

	render() {
		return null;
	}
}

export default Logout;
