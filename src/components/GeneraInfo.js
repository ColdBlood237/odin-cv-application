import React, { Component } from "react";

export default class GeneralInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Personal Information</h3>
        <form>
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="Last name"></input>
          <input type="text" placeholder="Title"></input>
          <input type="file" accept="image/*" />
          <input type="text" placeholder="Address"></input>
          <input type="number" placeholder="Phone number"></input>
          <input type="email" placeholder="Email"></input>
          <textarea placeholder="Description"></textarea>
        </form>
      </div>
    );
  }
}
