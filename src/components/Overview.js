import React, { Component } from "react";

export default class Overview extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="overview">
        <div className="ov-header"></div>
        <div className="ov-body">
          <div className="ov-description">
            <h4>Description</h4>
            <hr></hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida,
              nulla eget blandit fermentum, mauris nisi rutrum libero, ac
              pharetra erat est sit amet tellus. Quisque fermentum dolor a
              interdum fermentum. Maecenas vehicula ac ipsum nec gravida.
              Integer quis porta turpis. Aenean et metus.
            </p>
          </div>
          <div className="ov-experience">
            <h4>Experience</h4>
            <hr></hr>
            <span>2015 - Present</span>
            <span>Senior Web Developer</span>
            <span>Facebook Inc., Menlo Park</span>
            <span>2012 - 2015</span>
            <span>Junior Web Developer</span>
            <span>Tesla Inc., Palo Alto</span>
            <h4>Education</h4>
            <hr></hr>
            <span>2008 - 2010</span>
            <span>University of Technology, Oklahoma</span>
            <span>Degree: Master</span>
            <span>Subject: Science</span>
            <span>2005 - 2008</span>
            <span>University of Design Art, New York</span>
            <span>Degree: Bachelor</span>
            <span>Subject: Visual Art</span>
          </div>
        </div>
        <div className="ov-sidebar">
          <img src="https://picsum.photos/160"></img>
          <h4>Personal Details</h4>
          <h5>Address</h5>
          <span>Example Street 10</span>
          <h5>Phone Number</h5>
          <span>123456789</span>
          <h5>Email</h5>
          <span>john.doe@gmail.com</span>
        </div>
      </div>
    );
  }
}
