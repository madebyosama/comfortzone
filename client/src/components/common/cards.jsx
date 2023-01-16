import React, { Component } from "react";
import CardComponent from "./card";
import "./cards.css";
import { getFundData } from "./cardsData";

class Cards extends Component {
	state = {
		fundData: getFundData()
	};
	render() {
		return (
			<div className="container">
				<div className="row">{this.getCard()} </div>
			</div>
		);
	}

	getCard() {
		return (
			<div className="container cardsContainer">
				<div className="row">
					{this.state.fundData.map(fundData => (
						<CardComponent
							key={fundData._id}
							imageUrl={fundData.imageUrl}
							title={fundData.title}
							date={fundData.date}
							category={fundData.category}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Cards;
