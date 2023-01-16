import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";

class CardComponent extends Component {
	state = {
		imageUrl: this.props.imageUrl,
		title: this.props.title,
		date: this.props.date,
		category: this.props.category
	};
	render() {
		return (
			<div className="col-4">
				<Card className="full-div ">
					<div className="img-div">
						<Card.Img variant="top" src={this.state.imageUrl} />
					</div>
					<Card.Body>
						<div className="row section-div">
							<div className="col-8 ">
								<div className="card-title">
									<Card.Title>{this.state.title}</Card.Title>
								</div>
								<div className="row card-des">
									<div className="date col-5">
										<Card.Text>{this.state.date}</Card.Text>
									</div>

									<div className="category col-7">
										<Card.Text>{this.state.category}</Card.Text>
									</div>
								</div>
							</div>
							<div className="col-4 card-btn-div">
								<Button className="btn-primary-new btn-donate">Donate</Button>
							</div>
						</div>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default CardComponent;
