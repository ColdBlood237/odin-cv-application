import React, { Component } from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneraInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Overview from "./components/Overview";

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
      experiences: [],
    };

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <>
        <Header />
        <div>
          <GeneralInfo handleChange={this.handleChange} />
          <h3>Experience</h3>
          <Experience />
          <button>Add</button>
          <h3>Education</h3>
          <Education />
          <button>Add</button>
          <button>Reset</button>
        </div>
        <Overview generalInfo={this.state.generalInfo} />
      </>
    );
  }
}
