import React from "react";

export default function Education(props) {
  function handleChange() {
    const { handleEducationChange, id } = props;
    handleEducationChange(id);
  }

  function handleClick() {
    const { deleteEducation, id } = props;
    deleteEducation(id);
  }

  const { id } = props;

  return (
    <div>
      <form>
        <input
          id={"school-" + id}
          onChange={handleChange}
          type="text"
          placeholder="School name"
        ></input>
        <input
          id={"school-city-" + id}
          onChange={handleChange}
          type="text"
          placeholder="City"
        ></input>
        <input
          id={"diploma-" + id}
          onChange={handleChange}
          type="text"
          placeholder="Diploma"
        ></input>
        <input
          id={"subject-" + id}
          onChange={handleChange}
          type="text"
          placeholder="Subject"
        ></input>
        <input
          id={"edu-from-" + id}
          onChange={handleChange}
          type="text"
          placeholder="From"
        ></input>
        <input
          id={"edu-to-" + id}
          onChange={handleChange}
          type="text"
          placeholder="To"
        ></input>
      </form>
      <button onClick={handleClick} id={id}>
        Delete
      </button>
    </div>
  );
}
