import classes from "./Input.module.css";
import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} id={props.input.id} {...props.input} />
    </div>
  );
});
//{..props.input} adds all other key value pairs inside input obj, that we might pass inside, that be added as props to input
// making it highly configurable from outside, we can even remove id={props.input.id}
export default Input;
