import User from "../User/User";
import React, { useState } from "react";

const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const onSetUsername = (event) => {
    if (event.target.value.trim().length > 0) {
      setUsername(event.target.value);
    }
  };
  const onSetAge = (event) => {
    console.log(
      event.target.value,
      " moj tip vrednosti je: " + typeof +event.target.value
    );

    if (event.target.value.trim().length > 0) {
      console.log("Da li se dogadjam");
      setAge(event.target.value);
    } else {
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (+age > 0) {
      props.setUsers((prevState) => {
        return [
          ...prevState,
          {
            username: username,
            age: age,
          },
        ];
      });
    } else {
      props.setIsModal("Please enter age greater than 0");
    }
  };
  return (
    <div className="AddUser-input-wrapper">
      <form onSubmit={submitForm}>
        <p className="paragraph-inputs">Username:</p>
        <input type="text" onChange={onSetUsername} />
        <p className="paragraph-inputs">Age (Years):</p>
        <input type="text" onChange={onSetAge} />
        <div id="add-user-button-wrapper">
          <button id="add-user" type="submit">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
