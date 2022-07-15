import React from "react";
import styles from "./Button.module.css"; // we use it down there where we apply our className, we can also use name classes

// // import React from "react";
// import styled from "styled-components";
// // import "./Button.css";

// // Now what we build is not a functional component but we now import styled from styled-components
// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: 300px;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:button:hover,
//   &:button:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }`;
// tagged backtick literal, button is a method on this styled object, special method that is called .button``
//it will be executed as a method behind the scenes and what you pass inside the `` will be passed in the method in special way
//and this method will return a new button component, it has p for a paragraph, h1, h2,div etc
//
//
// - This button won't have classname, because we don't have where to set it up, so styles will directly affect the button
// - For pseudo selectors you can use & -> this tells the package you want to have a special case, pseudo selector in this case
// when this button has focus, please apply this style
//
// Now the button which is returned also by default applies all the props you might be passing, we can still ad onClick prop, type
// that will all be forwarded by package
//
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {/* in this styles object that changes dynamically we have access of all classes from our css file  */}
      {/* this will apply this button class in a special way to this button element */}
      {/*  */}
      {props.children}
    </button>
  );
};

export default Button;
