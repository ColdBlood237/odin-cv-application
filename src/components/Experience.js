import React from "react";

export default function Experience(props) {
  function handleChange() {
    const { handleExperienceChange, id } = props;
    handleExperienceChange(id);
  }

  function handleClick() {
    const { deleteExperience, id } = props;
    deleteExperience(id);
  }

  const { id } = props;
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          id={"position-" + id}
          type="text"
          placeholder="Position"
        ></input>
        <input
          onChange={handleChange}
          id={"company-" + id}
          type="text"
          placeholder="Company"
        ></input>
        <input
          onChange={handleChange}
          id={"city-" + id}
          type="text"
          placeholder="City"
        ></input>
        <input
          onChange={handleChange}
          id={"exp-from-" + id}
          type="text"
          placeholder="From"
        ></input>
        <input
          onChange={handleChange}
          type="text"
          id={"exp-to-" + id}
          placeholder="To"
        ></input>
      </form>
      <button onClick={handleClick} id={id}>
        Delete
      </button>
    </div>
  );
}
