import { useState, useRef } from "react";
const useInput = (validity) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const ref = useRef();

  const isValid = validity(enteredValue);
  const isInvalid = !isValid && isTouched;

  const onChangeFunc = (val) => {
    setEnteredValue(val.target.value);
    setIsTouched(true);
  };

  const onBlurFunc = (val) => {
    setEnteredValue(val.target.value);
    setIsTouched(false);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    enteredValue,
    isTouched,
    isInvalid,
    onChangeFunc,
    onBlurFunc,
    reset,
    ref,
  };
};

export default useInput;
