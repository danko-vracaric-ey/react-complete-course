//we will execute this file with node js, we already use it for running dev server, installing packages etc
// npm init -y
//this gives us packagejson so we can install third party packages
//little bit different import when we run it with node js

const redux = require("redux"); //returns redux object

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// now we pass this reducer to the store, because store must know which reducer job is to change it

//it will be called by redux library and always will receive 2 parameters,
// the old/exising state and action that was dispatched
// it must always return a new state object, often will be but theoretically can be any type
// it must be a pure function, same input should produce same outputs so no producing side effects inside it

const store = redux.createStore(counterReducer);
// store manages data that is determined by reducer
// reducer will produce new state snapshots

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//inside our component, we can call method getState() on our store
//it will get us latest state snapshot
//function will get triggered whenever state changes
//and with getState method we can get latest state

store.subscribe(counterSubscriber);

//now we call subsribe method on the store, so we can tell it that our function
//needs to be executed whenever the state changes
// so method expects a function that redux will execute whenever the data in store changes
//**first time it wont execute it because the state didn't change */

// we need an action

// we get an error when we run node "ourFileName"

//problem is code in reducer will run once redux initializes store,
//problem is state is undefined when it runs first time
// so we need to give it initial val; state={counter:0}

//even now we don't see any log, that is because we haven't dispatched any actions

//dispatch is an js object, with type prop

store.dispatch({ type: "increment" });

//Now once we added if(actio.type === "increment") it will not increment in initiaization phase
// because we just return state

store.dispatch({ type: "decrement" });
//
