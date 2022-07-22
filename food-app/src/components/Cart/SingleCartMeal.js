import React, { useContext } from "react";
import classes from "./SingleCartMeal.module.css";
import AuthContext from "../auth-context/AuthContex";
import { __esModule } from "@testing-library/jest-dom/dist/matchers";

const SingleCartMeal = (props) => {
  const ctx = useContext(AuthContext);

  const onRemoveHandler = () => {
    if (props.amount > 0) {
      ctx.setCartData((prev) => {
        return prev.map((e) => {
          if (e.amount > 0) {
            if (e.id === props.id) {
              return {
                ...e,
                amount: e.amount - 1,
                totalMealPrice: Math.round(e.totalMealPrice - e.price),
              };
            }
            return e;
          } else if (e.amount === 1) {
            if (e.id === props.id) {
              return {
                ...e,
                amount: e.amount - 1,
                totalMealPrice: 0,
              };
            }
            return e;
          }
        });
      });
    }
  };
  const onAddHandler = () => {
    ctx.setCartData((prev) => {
      return prev.map((e) => {
        if (e.id === props.id) {
          return {
            ...e,
            amount: e.amount + 1,
            totalMealPrice: Math.round(e.totalMealPrice + e.price),
          };
        }
      });
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <div className={classes.priceAmount}>
          <h3>${props.totalMealPrice}</h3>
          <h4>X{props.amount}</h4>
        </div>
      </div>
      <div className={classes.buttons}>
        <button onClick={onRemoveHandler}>-</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </div>
  );
};

export default SingleCartMeal;
