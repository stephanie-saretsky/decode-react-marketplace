import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class List extends Component {
  render() {
    return (
      <div>
        <h4>Name: {this.props.name}</h4>
        <div>Rating: {this.props.rating}</div>
        <Link to={"/seller/" + this.props.id}> View their items </Link>
      </div>
    );
  }
}

export default List;
