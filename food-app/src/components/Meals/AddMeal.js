import React from "react";
import classes from "./AddMeal.module.css";
import { useContext, useState, useRef } from "react";
import AuthContext from "../auth-context/AuthContex";
const AddMeal = (props) => {
  // const [mealNum, setMealNum] = useState("");
  const mealNumberRef = useRef();
  const ctx = useContext(AuthContext);

  // const numberOfMeals = (e) => {
  //   setMealNum(e.target.value);
  // };

  const onAddHandler = (event) => {
    event.preventDefault();

    ctx.setCartData((prev) => {
      if (prev.filter((e) => props.meal.id === e.id).length === 0) {
        return [
          ...prev,
          {
            name: props.meal.name,
            amount: +mealNumberRef.current.value,
            id: props.meal.id,
            price: props.meal.price,
            totalMealPrice: Math.round(
              props.meal.price * +mealNumberRef.current.value
            ),
          },
        ];
      } else {
        return prev.map((e) => {
          if (e.id === props.meal.id) {
            return {
              ...e,
              amount: e.amount + +mealNumberRef.current.value,
              totalMealPrice: Math.round(
                e.totalMealPrice +
                  +mealNumberRef.current.value * props.meal.price
              ),
            };
          }
          return e;
        });
      }
    });
  };

  return (
    <form onSubmit={onAddHandler}>
      <div className={classes.amountType}>
        <h4>Amount </h4>
        <input type="number" ref={mealNumberRef}></input>
      </div>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default AddMeal;
