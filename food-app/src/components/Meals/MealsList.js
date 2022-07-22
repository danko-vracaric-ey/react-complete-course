import classes from "./MealsList.module.css";
import { useContext } from "react";
import SingleMeal from "./SingleMeal";
const MealsList = (props) => {
  console.log(props);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {props.data.map((meal) => {
          return (
            <SingleMeal
              name={meal.name}
              description={meal.description}
              price={meal.price}
              id={meal.id}
            ></SingleMeal>
          );
        })}
      </div>
    </div>
  );
};

export default MealsList;
