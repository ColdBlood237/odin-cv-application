import React, { Component } from "react";

export default class Experience extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { handleExperienceChange, id } = this.props;
    handleExperienceChange(id);
  }

  render() {
    const { id } = this.props;
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            id={"position-" + id}
            type="text"
            placeholder="Position"
          ></input>
          <input
            onChange={this.handleChange}
            id={"company-" + id}
            type="text"
            placeholder="Company"
          ></input>
          <input
            onChange={this.handleChange}
            id={"city-" + id}
            type="text"
            placeholder="City"
          ></input>
          <input
            onChange={this.handleChange}
            id={"exp-from-" + id}
            type="text"
            placeholder="From"
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id={"exp-to-" + id}
            placeholder="To"
          ></input>
        </form>
        <button>Delete</button>
      </div>
    );
  }
}
