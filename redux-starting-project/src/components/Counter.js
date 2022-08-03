import { Component } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux/es/exports";
// bit more convinient to use than useStore, so we can more easily select part of store
// in class based comp then there is a connect function that can be used as a wrapper around our class component
import { INCREMENT } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter); // we pass it a function, a function that will be executed by redux, which decides which piece of data we
  //wanna get from store, in more complex state we need this ability to get a piece/slice of that complex state
  //that function will get redux state and return part of state we want to get
  // so use selector will give us
  // when we use useSelector inside our component react will auto subscribe to the store
  // so it will(the componnet) be updated whenever state changess
  // if the comp unmounts, react clears the subscription

  //for dispatching actions
  //useDispatch hook, that will let us dispatch actions from inside the components
  const dispatch = useDispatch();
  //it gives us back a function we can execute

  const showControl = useSelector((state) => state.showStatus);

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };
  const increaseBy5Handler = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "CONTROL" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showControl ? (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseBy5Handler}>Increase By 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      ) : (
        ""
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

//let's see how it works in class components
// we use connect

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>

//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   } // NOTICE! WE GET COUNTER FROM PROPS BECAUSE WE MAP COUNTER STATE TO PROPS
// } // WE ALSO NEED TO BIND THIS TO OUR HANDLERS SO IT REFERS TO OUR CLASS
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// //this receives an redux state and returns an object where keys will be available in
// //as props in receiving componnet! ok!
// //and the values of these keys is the logic for drilling into that redux state
// //similar like in useSelector we get the state=> then we DRILL into state to get state.counter, COUNTERs

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };
// //THIS LET US that we have increment prop, and that prop holds function that we can call that will call dispatch and dispatch action

// //idea is to store dispatch fuctions in props, which can execute as a function and when executed dispatch action to the store

// // we dont export normally, but connect()-> this returns a function that we again execute
// //with Counter as a parameter so:
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// connect is higher order component,
//connect also wants some arguments,2 function
//first - function that maps redux state to props. that the comp will recieve
//

//when using connect, react will still subscribe for us
