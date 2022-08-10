import classes from "./InputOrdem.module.css";
import React from "react";

const InputOrdem = React.forwardRef((props, ref) => {
  return (
    <div className={`${props.className} ${classes.input}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.input.id}
        onChange={props.input.inputlogic.onChangeFunc}
        onBlur={props.input.inputlogic.onBlurFunc}
        ref={ref}
        value={props.input.inputlogic.enteredValue}
        {...props.input}
      />
    </div>
  );
});

export default InputOrdem;
