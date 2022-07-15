import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import classes from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color:${(props) => (props.invalid ? "red" : "yellow")}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 3px solid ${(props) => (props.invalid ? "blue" : "#ccc")};
//     background:${(props) => (props.invalid ? "red" : "gray")}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;
//   &.invalid input {
//     border-color: rgb(194, 139, 139);
//   }

//   &.invalid label {
//     color: red;
//   }
// `; now that we added invalid through props we can remove this

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  // how to add extra slightly red to input if user enters somethin invalid
  const goalInputChangeHandler = (event) => {
    console.log("AA");
    if (event.target.value.trim().length > 0) {
      setIsValid(true); // now if I start typing this will change and
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      // trim to check if the user dint fill in emptyspaces
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  // now if isValid is false I want to apply the styles, easiest way is inline, inline style wants an object
  // but inline style has highest priority and we overwrite all css with it
  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      {/* we don't need to write the class name now, so here I only need to set invalid or nothing*/}
      {/*  className={!isValid && "invalid"}*/}
      {/* you can also add props and utilize them inside the `` backticks */}
      {/* <FormControl invalid={!isValid}> */}
      <div
        className={`${classes["form-control"]} ${!isValid && styled.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* </FormControl> */}
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
