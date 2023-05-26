import React, { Component } from "react";

export default class Experience extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Position"></input>
          <input type="text" placeholder="Company"></input>
          <input type="text" placeholder="City"></input>
          <input type="date" placeholder="From"></input>
          <input type="date" placeholder="To"></input>
        </form>
        <button>Delete</button>
      </div>
    );
  }
}
