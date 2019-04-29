import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Seller from "./Seller.jsx";
import Item from "./Item.jsx";
import Details from "./Details.jsx";
import Reviewer from "./Reviewer.jsx";
import List from "./List.jsx";
import Form from "./Form.jsx";
import { initialItems, initialSellers, reviewers } from "./data.js";

let renderAllItems = () => {
  return (
    <div>
      <div className="App-header">
        <Link to={"/list/"}>
          <div className="App-intro">View all sellers</div>
        </Link>
        <Link to={"/form/item"}>
          <div className="App-intro">Create your listing</div>
        </Link>
      </div>
      {initialItems.map(item => (
        <Item
          cost={item.price}
          sellerId={item.sellerId}
          imageLocation={item.image}
          description={item.description}
          id={item.id}
        />
      ))}
    </div>
  );
};

let renderList = () => {
  return (
    <div>
      {initialSellers.map(seller => (
        <List name={seller.name} rating={seller.rating} id={seller.id} />
      ))}
    </div>
  );
};

let renderItemForm = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

let renderOneItem = routerData => {
  let id = routerData.match.params.itemId;
  console.log("id", id);
  let candidates = initialItems.filter(item => {
    return item.id === id;
  });
  return <Details item={candidates[0]} />;
};

let renderSeller = routerData => {
  let sellerId = routerData.match.params.sid;
  let candidates = initialSellers.filter(seller => {
    return seller.id === sellerId;
  });
  return <Seller seller={candidates[0]} />;
};

let renderReviewer = routerData => {
  let reviewerId = routerData.match.params.rid;
  let candidates = reviewers.filter(rev => {
    return rev.id === reviewerId;
  });
  return <Reviewer rev={candidates[0]} />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={renderAllItems} />
          <Route exact={true} path="/list" render={renderList} />
          <Route exact={true} path="/seller/:sid" render={renderSeller} />
          <Route exact={true} path="/details/:itemId" render={renderOneItem} />
          <Route exact={true} path="/reviewer/:rid" render={renderReviewer} />
          <Route exact={true} path="/form/item" render={renderItemForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
