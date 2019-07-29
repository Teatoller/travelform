import React, { Component } from "react";
import TravelFormComponent from "./TravelFormComponent";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVeg: false,
      isChicken: false,
      isLactoseFree: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <TravelFormComponent handleChange={this.handleChange} data={this.state} />
    );
  }
}

export default Form;
