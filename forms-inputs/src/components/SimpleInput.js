import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFromIsValid] = useState(false);
  //2 ways to fetch entered value of user input
  //1 Listen on every keystroke and store to a state var, or useRef when user is done with typing
  // console.log(enteredName, typeof enteredName);
  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    // enteredNameIsValid && enteredageIsValid etc
    formIsValid = true;
  }
  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };
  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  //   console.log("Dogadjam se");
  // };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // setEnteredEmailTouched(false);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }
    resetNameInput();
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  }; // on event you should call prevent default to stop reload, if a form is submitted with button inside of form, sends http reqest is send to the server
  // console.log(enteredName);
  // console.log(nameInputRef.current.value);
  // const enteredValue = nameInputRef.current.value; // acces input element .current
  // CLEARING INPUT XX - setEnteredName("  ");
  // CLEARING INPUT XX - nameInputRef.current.value = ""; it works but is not ideal
  //here we don't want that behavior

  // if you are only interested in value once, then ref, for instant validation - state, or to reset the entered input, setEnteredName("")

  //ADDING BASIC VALIDATION - NOT ALLOWING EMPTY LOGS TO BE SEND, CLIENT SIDE IS NOT ENOUGH, IT"S NOT SECURITY MECHANISM

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler} // on Blur Fires when input loses focus
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler} // on Blur Fires when input loses focus
          value={enteredEmail}
        />
        {nameInputHasError && (
          <p className="error-text">Email must be valid email form</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
