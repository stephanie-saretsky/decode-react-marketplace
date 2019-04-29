import React, { Component } from "react";
import "./App.css";

class Reviewer extends Component {
  render() {
    return (
      <div className="card center">
        <h4>{this.props.rev.name}</h4>
        <div>{this.props.rev.rating}</div>
        <div>{this.props.rev.bio}</div>
      </div>
    );
  }
}

export default Reviewer;
