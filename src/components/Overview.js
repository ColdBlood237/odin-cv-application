import React, { Component } from "react";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo, experiences, education } = this.props;

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

          {experiences.length !== 0 ? (
            <div className="ov-experience">
              <h4>Experience</h4>
              <hr></hr>
              {experiences.map((experience) => {
                return (
                  <div key={experience.key}>
                    <span>
                      {experience.from} - {experience.to}
                    </span>
                    <span>{experience.position}</span>
                    <span>
                      {experience.company}, {experience.city}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}

          {education.length !== 0 ? (
            <div className="ov-education">
              <h4>Education</h4>
              <hr></hr>
              {education.map((edu) => {
                return (
                  <div key={edu.key}>
                    <span>
                      {edu.from} - {edu.to}
                    </span>
                    <span>
                      {edu.school}, {edu.city}
                    </span>
                    <span>{edu.diploma}</span>
                    <span>{edu.subject}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="ov-sidebar">
          <img src={generalInfo.imgUrl} alt="profile"></img>
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
