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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  handleChange(e) {
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
    console.log(id);
    const currentExpIndex = this.state.experiences.findIndex(
      (exp) => exp.key == id
    );
    const updatedExperience = {
      position: document.getElementById("position").value,
      company: document.getElementById("company").value,
      city: document.getElementById("city").value,
      from: document.getElementById("exp-from").value,
      to: document.getElementById("exp-to").value,
      key: id,
    };
    const newExperiences = [...this.state.experiences];
    newExperiences[currentExpIndex] = updatedExperience;
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
          <Experience
            handleExperienceChange={this.handleExperienceChange}
            id={this.state.experiences[0].key}
          />
          <button>Add</button>
          <h3>Education</h3>
          <Education />
          <button>Add</button>
          <button>Reset</button>
        </div>
        <Overview
          generalInfo={this.state.generalInfo}
          experiences={this.state.experiences}
        />
      </>
    );
  }
}
