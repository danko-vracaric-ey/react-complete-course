import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") }; // here we access prevState.value, and repeat our validity check here
  }

  return {
    value: "",
    isValid: false,
  };
}; // we won't need any data from Login function, it doesn't need to interact with anything defined inside the funciton,
// all the data used inside the reducerFunction will be passed into this function when it is executed by react automatically
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 }; // here we access prevState.value, and repeat our validity check here
  }

  return {
    value: "",
    isValid: false,
  };
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  console.log("Ja sam", classes.btn);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    setTimeout(() => {
      console.log("Checking for validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log("CleanUp");
    }; // dependancy array will guarantee that this will run with latest state values, even though it depends on other states now it's ok
  }, [emailIsValid, passwordIsValid]); //everytime a useEffect function runs, before it runs except the first time this cleanup function will run and it will run whenever comp unmounts
  //but
  //for every keystroke we are setting a time and after 500ms we do this, trick is we save the timer and for the next keystorke we clear it
  // we want to run this validation with every key stroke an change
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);  here we will need to dispatch an action
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.value.includes("@")
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({
      type: "INPUT_BLUR",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
