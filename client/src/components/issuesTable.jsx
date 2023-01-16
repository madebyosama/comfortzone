import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class UsersTable extends Component {
  columns = [
    {
      path: "title",
      label: "Name",
      content: movie => <Link to={`/users/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Type" },
    { path: "numberInStock", label: "Phone Number" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn-danger btn"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;
