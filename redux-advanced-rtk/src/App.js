// import { useDispatch, useSelector } from "react-redux/";
// import { Fragment } from "react";
// import { useEffect } from "react";

// import Cart from "./components/Cart/Cart";
// import Layout from "./components/Layout/Layout";
// import Products from "./components/Shop/Products";
// import { uiActions } from "./store/ui-slice";
// import Notification from "./components/UI/Notification";
// import sendCartData from "./store/cart-slice";
// // I want to dispatch an action when I start sending, then after we got response data,
// // in this case we don't need

// let isInitial = true;

// function App() {
//   const dispatch = useDispatch();
//   const showCart = useSelector((state) => state.ui.cartIsVisible);
//   const cart = useSelector((state) => state.cart); //useSelector sets up subscription to redux
//   const notification = useSelector((state) => state.ui.notification);

//   //we can do error and loading with state but since we have UI slice in redux we can use that

//   useEffect(() => {
//     // const sendCartData = async () => {
//     //   dispatch(
//     //     uiActions.showNotification({
//     //       status: "pending",
//     //       title: "Sending...",
//     //       message: "Sending cart data", --------> I dispatch this in thunk's return function
//     //     })
//     //   );
//     //   const res = await fetch(
//     //     "https://redux-advanced-87676-default-rtdb.firebaseio.com/items.json",
//     //     {
//     //       method: "PUT", // we also store data but new data won't be added on a list but overwrite data
//     //       body: JSON.stringify(cart),
//     //     }
//     //   );
//     //   if (!res.ok) {
//     //     // throw new Error("Sending cart data failed"); instead I will dispatch an action
//     //     throw new Error("Sending data faild");
//     //   } ------------> I move all this, to execute after dispatching this first notification

//     //   const resData = await res.json();
//     // dispatch(
//     //   uiActions.showNotification({
//     //     status: "success", // used for css classes
//     //     title: "Sucess", //
//     //     message: "Sending cart data successfully",
//     //   })
//     // );
//     // }

//     if (isInitial) {
//       isInitial = false; //this blocks sendCart data when app first starts so it doesnt rewrite the cart with empty
//       return;
//     }
//     dispatch(sendCartData(cart));

//     // GOOD THING ABOUT TOOLKIT IS THAT IT DOESN"T ONLY ACCEPT ACTION OBJECTS BUT ALSO ACTION CREATORS THAT RETURN FUNCTIONS
//     // IF IT SEES IT IS DISPATCHING FUNCTION IT WILL EXECUTE THAT FUNC FOR YOU, SO WE CAN DISPATCH INSIDE AGAIN

//     // sendCartData().catch((error) => {
//     //   dispatch(
//     //     uiActions.showNotification({
//     //       status: "error", // used for css classes
//     //       title: "Error!", //
//     //       message: "Sending cart data failed",
//     //     })
//     //   );
//     // });
//   }, [cart, dispatch]); // we can add dispatc because redux makes sure it is the same function
//   // only problem this will run with empty cart initially but we will fi it

//   // DISPATCHING DIFFERENT NOTIFICATIONS DEPENDING ON CURRENT STATUS WE HAVE

//   return (
//     <Fragment>
//       {notification && (
//         <Notification
//           status={notification.status}
//           title={notification.title}
//           message={notification.message}
//         />
//       )}
//       <Layout>
//         {showCart && <Cart />}
//         <Products />
//       </Layout>
//     </Fragment>
//   );
// }

// export default App;

import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    console.log("I am happening");

    dispatch(fetchCartData());
  }, [dispatch]); //fetching new cart from firebase will set our cat with new cart and that will trigger second use effect,
  //one solution is to go to cartSlice and add changed proprety to state,
  // then if we change the cart we set it on true -> so we set a flag

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed === true) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
