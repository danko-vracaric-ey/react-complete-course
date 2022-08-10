import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// ----------------------------------------------------------------------------------------------------------------------

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-advanced-87676-default-rtdb.firebaseio.com/items.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

// ---------------------------------------------------------------------------------------------------------------------

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    // we return async func, we don't know who will execute the function, but inside we dispatch a notification action, create a new function in there we send request and then call it inside try catch
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-advanced-87676-default-rtdb.firebaseio.com/items.json",
        {
          method: "PUT", // we also store data but new data won't be added on a list but overwrite data
          body: JSON.stringify({
            items: cartData.items,
            totalQuantity: cartData.totalQuantity,
          }), // instead whole cartData, so we don't have changed flag written in the base every time, we can not stringify the whole object
        }
      );
      if (!res.ok) {
        // throw new Error("Sending cart data failed"); instead I will dispatch an action
        throw new Error("Sending data faild");
      } // FOR HANDLING POTENTIAL ERROS NEW FUNCTION

      const resData = await res.json();
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success", // used for css classes
          title: "Sucess", //
          message: "Sending cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

// -----------------------------------------------------------------------------------------------------------------------------------------------+
