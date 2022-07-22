import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import AuthContext from "../auth-context/AuthContex";
import React, { useContext } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(AuthContext);
  const openModalHandler = () => {
    props.setIsCartModal(true);
  };

  const numberOfItems = ctx.cartData.reduce(
    (acc, prev, curr, currIndex, arr) => {
      return acc + prev.amount;
    },
    0
  );

  // console.log(numberOfItems);
  return (
    <button className={classes.button} onClick={openModalHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};
// inside the button icon, then some text and a little badge

export default HeaderCartButton;
