import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getUser, saveUser } from "../services/fakeUserService";
import { getTypes } from "../services/fakeUserLevelService";

class UserForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };

  componentDidMount() {
    const genres = getTypes();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getUser(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  doSubmit = () => {
    saveUser(this.state.data);

    this.props.history.push("/dashboard/users");
  };

  render() {
    return (
      <div className="container my-5">
        <h1>User Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Name")}
          {this.renderSelect("genreId", "Type", this.state.genres)}
          {this.renderInput("numberInStock", "Phone Number", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default UserForm;
