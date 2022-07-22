import React, { useState } from "react";
import ReactDOM from "react-dom";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Intro from "./Intro";
import CartModal from "../Cart/CartModal";

const Header = (props) => {
  const [isCartModal, setIsCartModal] = useState(false);
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton setIsCartModal={setIsCartModal}></HeaderCartButton>
      </header>
      {ReactDOM.createPortal(
        isCartModal && <CartModal setIsCartModal={setIsCartModal}></CartModal>,
        document.getElementById("forModal")
      )}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
      <Intro></Intro>
    </React.Fragment>
  );
};

export default Header;
