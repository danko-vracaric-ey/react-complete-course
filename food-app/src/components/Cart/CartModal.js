import React, { useContext, useReducer, useState } from "react";
import classes from "./CartModal.module.css";
import AuthContext from "../auth-context/AuthContex";
import MealsList from "../Meals/MealsList";
import SingleCartMeal from "./SingleCartMeal";

const CartModal = (props) => {
  const ctx = useContext(AuthContext);

  const calcTotal = ctx.cartData.reduce((acc, prev) => {
    return acc + prev.totalMealPrice;
  }, 0);
  console.log(calcTotal, "Koliki je total");

  const onCancelOrder = () => {
    ctx.setCartData([]);
    props.setIsCartModal(false);
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        {ctx.cartData.map((e) => {
          return (
            <SingleCartMeal
              name={e.name}
              amount={e.amount}
              totalMealPrice={e.totalMealPrice}
              id={e.id}
              key={e.id}
            />
          );
        })}
        <div className={classes.total}>
          <h2>Total Amount</h2>
          <h2>${calcTotal}</h2>
        </div>
        <div className={classes.confirmCancel}>
          <button onClick={onCancelOrder}>Cancel</button>
          <button className={classes.order} onClick={() => {}}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
