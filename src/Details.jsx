import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { reviews } from "./data.js";
import Review from "./Review.jsx";

class Details extends Component {
  render() {
    let newReviews = reviews.filter(rev => {
      return rev.itemId === this.props.item.id;
    });
    return (
      <div className="card center">
        <img height="100px" src={this.props.item.image} />
        <div>
          <div>{this.props.item.description}</div>
          <div>{this.props.item.cost}</div>
          <div>{this.props.item.avail}</div>
          <Link to={"/seller/" + this.props.item.sellerId}>Link to seller</Link>
          <div>
            <br />
            <h4>Reviews:</h4>
            {newReviews.map(rev => (
              <Review
                description={rev.description}
                reviewerId={rev.reviewerId}
                itemId={rev.itemId}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Details;
