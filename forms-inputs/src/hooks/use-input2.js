import { useState } from "react";
import { useReducer } from "react";

const initialInputState = {
  enteredValue: "",
  isTouchedState: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      enteredValue: action.value,
      isTouchedState: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return { ...state, isTouchedState: true };
  }
  if (action.type === "RESET") {
    return {
      enteredValue: "",
      isTouchedState: false,
    };
  }

  return initialInputState;
};

const useInput2 = (validity) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [isEnteredValueTouched, setIsEnteredValueTouched] = useState(false);

  const isEnteredValueValid = validity(inputState.enteredValue);
  //   const isEnteredValueValid = inputState.value;
  //   const enteredValueInvalid = !isEnteredValueValid && isEnteredValueTouched;
  const enteredValueInvalid = !isEnteredValueValid && inputState.isTouchedState;

  const enteredValueChangeHandler = (val) => {
    dispatch({ type: "INPUT", value: val.target.value });
    // setEnteredValue(val.target.value);
  };

  const onBlurHandler = (val) => {
    dispatch({ type: "BLUR" });
    // setIsEnteredValueTouched(true);
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setEnteredValue("");
    // setIsEnteredValueTouched(false);
    // console.log(enteredValue);
  };

  return {
    // enteredValue,
    enteredValue: inputState.enteredValue,
    isEnteredValueValid,
    enteredValueInvalid,
    enteredValueChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput2;
