import React, { Component } from "react";

export default class Education extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { handleEducationChange, id } = this.props;
    handleEducationChange(id);
  }

  render() {
    const { id } = this.props;

    return (
      <div>
        <form>
          <input
            id={"school-" + id}
            onChange={this.handleChange}
            type="text"
            placeholder="School name"
          ></input>
          <input
            id={"school-city-" + id}
            onChange={this.handleChange}
            type="text"
            placeholder="City"
          ></input>
          <input
            id={"diploma-" + id}
            onChange={this.handleChange}
            type="text"
            placeholder="Diploma"
          ></input>
          <input
            id={"subject-" + id}
            onChange={this.handleChange}
            type="text"
            placeholder="Subject"
          ></input>
          <input
            id={"edu-from-" + id}
            onChange={this.handleChange}
            type="text"
            placeholder="From"
          ></input>
          <input
            id={"edu-to-" + id}
            onChange={this.handleChange}
            type="text"
            placeholder="To"
          ></input>
        </form>
        <button id={id}>Delete</button>
      </div>
    );
  }
}
