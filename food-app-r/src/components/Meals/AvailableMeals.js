import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useFetch from "../hooks/use-fetch";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const { error: anError, isLoading, sendRequest: fetchData } = useFetch();

  useEffect(() => {
    const fetchedMeals = [];
    const handleData = (data) => {
      for (const key in data) {
        fetchedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(fetchedMeals);
    };
    fetchData(
      {
        url: "https://react-http-664f9-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      handleData
    );
  }, []);

  let mealsList = <p>Found no meals</p>;

  if (meals.length > 0) {
    mealsList = meals.map((meal) => (
      <MealItem
        key={meal.id}
        name={meal.name}
        id={meal.id}
        price={meal.price}
        description={meal.description}
      />
    ));
  }
  if (isLoading) {
    mealsList = <p>Loading...</p>;
  }

  if (anError) {
    mealsList = <p>{anError}</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
