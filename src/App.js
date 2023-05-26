import React, { Component } from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneraInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Overview from "./components/Overview";
import uniqid from "uniqid";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        fname: "",
        lname: "",
        title: "",
        imgUrl: "https://picsum.photos/160",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      experiences: [
        {
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
          key: uniqid(),
        },
      ],
      education: [
        {
          school: "",
          city: "",
          diploma: "",
          subject: "",
          from: "",
          to: "",
          key: uniqid(),
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  handleChange() {
    this.setState({
      generalInfo: {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        title: document.getElementById("title").value,
        imgUrl: document.getElementById("img-url").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        description: document.getElementById("description").value,
      },
    });
  }

  handleExperienceChange(id) {
    const currentExpIndex = this.state.experiences.findIndex(
      (exp) => exp.key == id
    );
    const updatedExperience = {
      position: document.getElementById("position-" + id).value,
      company: document.getElementById("company-" + id).value,
      city: document.getElementById("city-" + id).value,
      from: document.getElementById("exp-from-" + id).value,
      to: document.getElementById("exp-to-" + id).value,
      key: id,
    };
    const newExperiences = [...this.state.experiences];
    newExperiences[currentExpIndex] = updatedExperience;
    this.setState({
      experiences: newExperiences,
    });
  }

  handleEducationChange(id) {
    const currentEduIndex = this.state.education.findIndex(
      (exp) => exp.key == id
    );
    const updatedEducation = {
      school: document.getElementById("school-" + id).value,
      city: document.getElementById("school-city-" + id).value,
      diploma: document.getElementById("diploma-" + id).value,
      subject: document.getElementById("subject-" + id).value,
      from: document.getElementById("edu-from-" + id).value,
      to: document.getElementById("edu-to-" + id).value,
      key: id,
    };
    const newEducation = [...this.state.education];
    newEducation[currentEduIndex] = updatedEducation;
    this.setState({
      education: newEducation,
    });
  }

  addExperience() {
    const newExperiences = this.state.experiences.slice();
    newExperiences.push({
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      key: uniqid(),
    });
    this.setState({
      experiences: newExperiences,
    });
  }

  addEducation() {
    const newEducation = this.state.education.slice();
    newEducation.push({
      school: "",
      city: "",
      diploma: "",
      subject: "",
      from: "",
      to: "",
      key: uniqid(),
    });
    this.setState({
      education: newEducation,
    });
  }

  deleteExperience(id) {
    const newExperiences = this.state.experiences.filter(
      (exp) => exp.key !== id
    );
    this.setState({
      experiences: newExperiences,
    });
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <GeneralInfo handleChange={this.handleChange} />
          <h3>Experience</h3>
          {this.state.experiences.map((experience) => {
            return (
              <Experience
                handleExperienceChange={this.handleExperienceChange}
                deleteExperience={this.deleteExperience}
                id={experience.key}
                key={experience.key}
              />
            );
          })}

          <button onClick={this.addExperience} className="add-experience">
            Add
          </button>

          <h3>Education</h3>
          {this.state.education.map((edu) => {
            return (
              <Education
                handleEducationChange={this.handleEducationChange}
                id={edu.key}
                key={edu.key}
              />
            );
          })}

          <button onClick={this.addEducation} className="add-education">
            Add
          </button>

          <button>Reset</button>
        </div>
        <Overview
          generalInfo={this.state.generalInfo}
          experiences={this.state.experiences}
          education={this.state.education}
        />
      </>
    );
  }
}
