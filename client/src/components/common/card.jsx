import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";

class CardComponent extends Component {
	state = {
		title: "Heading",
		desc: "This is a long description",
		date: "12-12-2019"
	};
	render() {
		return (
			<Card style={{ width: "180rem" }}>
				<div className="fulldiv ">
					<div className="img-div">
						<Card.Img
							variant="top"
							src={require("../../assets/img/carousels/slider-001.jpg")}
						/>
					</div>
					<Card.Body>
						<div className="row section-div">
							<div className="col-8 ">
								<div className="title">
									<Card.Title>{this.state.title}</Card.Title>
								</div>
								<div className="row section-descr">
									<div className="date col-2">
										<Card.Text>{this.state.date}</Card.Text>
									</div>

									<div className="category col-10">
										<Card.Text>{this.state.desc}</Card.Text>
									</div>
								</div>
							</div>
							<div className="col-4 ">
								<Button className="btn-primary-new">Donate</Button>
							</div>
						</div>
					</Card.Body>
				</div>
			</Card>
		);
	}
}

export default CardComponent;
