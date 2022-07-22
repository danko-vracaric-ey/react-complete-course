import classes from "./Intro.module.css";

const Intro = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>Welcome To Grandma's Secret of a Tasty Bite</h1>
        <p>
          Choose one of delicious meals and enjoy your leisure time.<br></br>{" "}
          More choices to choose from and many means at great prices
        </p>
        <p>Fresh spices, finest meat and hot buns</p>
      </div>
    </div>
  );
};

export default Intro;
