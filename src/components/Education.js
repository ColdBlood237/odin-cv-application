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
    return (
      <div>
        <form>
          <input
            id="school"
            onChange={this.handleChange}
            type="text"
            placeholder="School name"
          ></input>
          <input
            id="school-city"
            onChange={this.handleChange}
            type="text"
            placeholder="City"
          ></input>
          <input
            id="diploma"
            onChange={this.handleChange}
            type="text"
            placeholder="Diploma"
          ></input>
          <input
            id="subject"
            onChange={this.handleChange}
            type="text"
            placeholder="Subject"
          ></input>
          <input
            id="edu-from"
            onChange={this.handleChange}
            type="text"
            placeholder="From"
          ></input>
          <input
            id="edu-to"
            onChange={this.handleChange}
            type="text"
            placeholder="To"
          ></input>
        </form>
        <button>Delete</button>
      </div>
    );
  }
}
