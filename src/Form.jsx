import React, { Component } from "react";
class Form extends Component {
  constructor() {
    super();
    console.log("constructing");
    this.state = {
      imageUrl: "",
      allItems: [],
      desc: "",
      price: "",
      avail: "",
      userInput: ""
    };
  }

  onChangeHandler = (event, item) => {
    console.log("the string", event.target.value);
    this.setState({
      [item]: event.target.value
    });
  };

  submitHandler = event => {
    console.log("form submission");
    event.preventDefault();
    this.setState({
      allItems: this.state.allItems.concat(
        this.state.desc + this.state.price + this.state.avail
      )
    });
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      desc: "",
      price: "",
      avail: ""
    });
  };

  render() {
    return (
      <div className="card center">
        <h1>Create your listing</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            onChange={event => this.onChangeHandler(event, "desc")} // function call allows the separation of text boxes
            value={this.state.task}
            placeholder="description"
          />
          <input
            type="text"
            onChange={event => this.onChangeHandler(event, "price")} // function call allows the separation of text boxes
            value={this.state.date}
            placeholder="price"
          />
          <input
            type="text"
            onChange={event => this.onChangeHandler(event, "avail")} // function call allows the separation of text boxes
            value={this.state.date}
            placeholder="availability"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Form;
