import React, { Component } from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneraInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <GeneralInfo />
          <h3>Experience</h3>
          <Experience />
          <button>Add</button>
          <h3>Education</h3>
          <Education />
          <button>Add</button>
        </div>
      </>
    );
  }
}
