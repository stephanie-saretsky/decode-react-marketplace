import React, { Component } from "react";
import "./App.css";
import { initialItems } from "./data";
import { Link } from "react-router-dom";

class Seller extends Component {
  render() {
    let sellerItems = initialItems.filter(item => {
      return item.sellerId === this.props.seller.id;
    });
    return (
      <div className="card center">
        <h4>{this.props.seller.name}</h4>
        <div>Seller Rating: {this.props.seller.rating}</div>
        <h4>Items:</h4>
        {sellerItems.map(rev => {
          console.log("arg", JSON.stringify(rev.id));
          return (
            <div>
              <Link to={"/details/" + rev.id}>Link to item</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Seller;
