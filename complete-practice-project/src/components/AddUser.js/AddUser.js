import "./AddUser.css";
import UserInput from "../UserInput/UserInput";
const AddUser = (props) => {
  return (
    <div className="AddUser-container">
      <UserInput setUsers={props.setUsers} setIsModal={props.setIsModal} />
    </div>
  );
};

export default AddUser;
