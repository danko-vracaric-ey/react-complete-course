import React from "react";
import "./User.css";
const User = (props) => {
  console.log(props.users + "hi from user");
  return (
    <div className="user-container">
      {props.users.map((user) => {
        return (
          <div className="user-wrapper">
            <h1>{user.username}</h1>
            <h1>{user.age}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default User;
