import React, { Component } from "react";

export default function GeneralInfo(props) {
  const { handleChange } = props;

  return (
    <div>
      <h3>Personal Information</h3>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="First name"
          id="fname"
        ></input>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Last name"
          id="lname"
        ></input>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Title"
          id="title"
        ></input>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Profile picture url"
          id="img-url"
        ></input>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Address"
          id="address"
        ></input>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Phone number"
          id="phone"
        ></input>
        <input
          onChange={handleChange}
          type="email"
          placeholder="Email"
          id="email"
        ></input>
        <textarea
          onChange={handleChange}
          placeholder="Description"
          id="description"
        ></textarea>
      </form>
    </div>
  );
}
