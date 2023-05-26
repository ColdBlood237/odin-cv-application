import React, { Component } from "react";

export default class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="School name"></input>
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="Diploma"></input>
          <input type="text" placeholder="Subject"></input>
          <input type="text" placeholder="From"></input>
          <input type="text" placeholder="To"></input>
        </form>
        <button>Delete</button>
      </div>
    );
  }
}
