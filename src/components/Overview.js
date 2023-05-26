import React, { Component } from "react";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo } = this.props;

    return (
      <div className="overview">
        <div className="ov-header">
          <h2>
            {generalInfo.fname} {generalInfo.lname}
          </h2>
          <p>{generalInfo.title}</p>
        </div>
        <div className="ov-body">
          {generalInfo.description !== "" ? (
            <div className="ov-description">
              <h4>Description</h4>
              <hr></hr>
              <p>{generalInfo.description}</p>
            </div>
          ) : (
            <></>
          )}

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
          <img src={generalInfo.imgUrl}></img>
          <h4>Personal Details</h4>
          <h5>Address</h5>
          <span>{generalInfo.address}</span>
          <h5>Phone Number</h5>
          <span>{generalInfo.phone}</span>
          <h5>Email</h5>
          <span>{generalInfo.email}</span>
        </div>
      </div>
    );
  }
}
