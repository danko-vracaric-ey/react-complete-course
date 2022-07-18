import User from "../User/User";
import Card from "../Card/Card";
import "./ListUsers.css";
const ListUsers = (props) => {
  return (
    <Card className="ListUsers">
      <User users={props.users}></User>
    </Card>
  );
};

export default ListUsers;
