//create a store and a reducer
import { legacy_createStore as createStore } from "redux";

export const INCREMENT = "INCREMENT";

const initState = {
  counter: 0,
  showStatus: true,
};

const counterReducer = (state = initState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, counter: state.counter + 1 };
  }
  if (action.type === "INCREASE") {
    return { ...state, counter: state.counter + action.amount };
  }
  if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - 1 };
  }
  if (action.type === "CONTROL") {
    return {
      ...state,
      showStatus: !state.showStatus,
    };
  }

  return state;
};
const store = createStore(counterReducer);

export default store;

//lets dispatch an action that changes some state that controls wheather this counter gets shown or not
