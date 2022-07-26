import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount"); //will run 3x because 3 instances were created and removed
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
