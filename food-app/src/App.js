import Header from "./components/Layout/Header";
import { Fragment, useContext, useState } from "react";
import classes from "./App.module.css";
import MealsList from "./components/Meals/MealsList";
import AuthContext from "./components/auth-context/AuthContex";
const DUMMY_DATA = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    id: 0,
  },
  {
    name: "Schnitzel",
    description: "A German speciality!",
    price: 46.5,
    id: 1,
  },
  {
    name: "Knedle",
    description: "A Serbian speciality!",
    price: 16.5,
    id: 2,
  },
];
function App() {
  const [cartData, setCartData] = useState([]);
  console.log("JA SMA CARTY ", cartData);

  return (
    <AuthContext.Provider
      value={{
        cartData: cartData,
        setCartData: setCartData,
        DUMMY_DATA: DUMMY_DATA,
      }}
    >
      <div id={classes.app}>
        <Header />
        <MealsList data={DUMMY_DATA}></MealsList>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
