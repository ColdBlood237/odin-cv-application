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
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            id="position"
            type="text"
            placeholder="Position"
          ></input>
          <input
            onChange={this.handleChange}
            id="company"
            type="text"
            placeholder="Company"
          ></input>
          <input
            onChange={this.handleChange}
            id="city"
            type="text"
            placeholder="City"
          ></input>
          <input
            onChange={this.handleChange}
            id="exp-from"
            type="text"
            placeholder="From"
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id="exp-to"
            placeholder="To"
          ></input>
        </form>
        <button>Delete</button>
      </div>
    );
  }
}
