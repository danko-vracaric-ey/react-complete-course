import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser.js/AddUser";
import ListUsers from "./components/ListUsers/ListUsers";
import Modal from "./components/Modal/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [isModal, setIsModal] = useState("");
  console.log("Ja sam User", users);
  return (
    <div className="app">
      {isModal && <Modal setIsModal={setIsModal} isModal={isModal} />}
      <AddUser setUsers={setUsers} setIsModal={setIsModal} />
      <ListUsers users={users} />
    </div>
  );
}

export default App;
