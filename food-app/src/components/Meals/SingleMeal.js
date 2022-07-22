import React from "react";
import classes from "./SingleMeal.module.css";
import AddMeal from "./AddMeal";

const SingleMeal = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>${props.price}</p>
      </div>
      <AddMeal meal={props}></AddMeal>
    </div>
  );
};

export default SingleMeal;
