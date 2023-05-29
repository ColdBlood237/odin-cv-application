import React, { Component, useState } from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneraInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import "./styles/styles.css";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fname: "",
    lname: "",
    title: "",
    imgUrl: "https://picsum.photos/160",
    address: "",
    phone: "",
    email: "",
    description: "",
  });

  const [experiences, setExperiences] = useState([
    { position: "", company: "", city: "", from: "", to: "", key: uniqid() },
  ]);

  const [education, setEducation] = useState([
    {
      school: "",
      city: "",
      diploma: "",
      subject: "",
      from: "",
      to: "",
      key: uniqid(),
    },
  ]);

  function handleChange() {
    setGeneralInfo({
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      title: document.getElementById("title").value,
      imgUrl: document.getElementById("img-url").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      description: document.getElementById("description").value,
    });
  }

  function handleExperienceChange(id) {
    const currentExpIndex = experiences.findIndex((exp) => exp.key === id);
    const updatedExperience = {
      position: document.getElementById("position-" + id).value,
      company: document.getElementById("company-" + id).value,
      city: document.getElementById("city-" + id).value,
      from: document.getElementById("exp-from-" + id).value,
      to: document.getElementById("exp-to-" + id).value,
      key: id,
    };
    const newExperiences = [...experiences];
    newExperiences[currentExpIndex] = updatedExperience;
    setExperiences(newExperiences);
  }

  function handleEducationChange(id) {
    const currentEduIndex = education.findIndex((edu) => edu.key === id);
    const updatedEducation = {
      school: document.getElementById("school-" + id).value,
      city: document.getElementById("school-city-" + id).value,
      diploma: document.getElementById("diploma-" + id).value,
      subject: document.getElementById("subject-" + id).value,
      from: document.getElementById("edu-from-" + id).value,
      to: document.getElementById("edu-to-" + id).value,
      key: id,
    };
    const newEducation = [...education];
    newEducation[currentEduIndex] = updatedEducation;
    setEducation(newEducation);
  }

  function addExperience() {
    setExperiences([
      ...experiences,
      {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        key: uniqid(),
      },
    ]);
  }

  function addEducation() {
    setEducation([
      ...education,
      {
        school: "",
        city: "",
        diploma: "",
        subject: "",
        from: "",
        to: "",
        key: uniqid(),
      },
    ]);
  }

  function deleteExperience(id) {
    const newExperiences = experiences.filter((exp) => exp.key !== id);
    setExperiences(newExperiences);
  }

  function deleteEducation(id) {
    const newEducation = education.filter((edu) => edu.key !== id);
    setEducation(newEducation);
  }

  function reset() {
    setGeneralInfo({
      fname: "",
      lname: "",
      title: "",
      imgUrl: "https://picsum.photos/160",
      address: "",
      phone: "",
      email: "",
      description: "",
    });

    setExperiences([
      { position: "", company: "", city: "", from: "", to: "", key: uniqid() },
    ]);

    setEducation([
      {
        school: "",
        city: "",
        diploma: "",
        subject: "",
        from: "",
        to: "",
        key: uniqid(),
      },
    ]);
  }

  return (
    <>
      <Header />
      <div>
        <GeneralInfo handleChange={handleChange} />
        <h3>Experience</h3>
        {experiences.map((experience) => {
          return (
            <Experience
              handleExperienceChange={handleExperienceChange}
              deleteExperience={deleteExperience}
              id={experience.key}
              key={experience.key}
            />
          );
        })}

        <button onClick={addExperience} className="add-experience">
          Add
        </button>

        <h3>Education</h3>
        {education.map((edu) => {
          return (
            <Education
              handleEducationChange={handleEducationChange}
              deleteEducation={deleteEducation}
              id={edu.key}
              key={edu.key}
            />
          );
        })}

        <button onClick={addEducation} className="add-education">
          Add
        </button>

        <button onClick={reset}>Reset</button>
      </div>
      <Overview
        generalInfo={generalInfo}
        experiences={experiences}
        education={education}
      />
    </>
  );
}
