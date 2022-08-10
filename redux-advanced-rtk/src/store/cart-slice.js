import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice"; // we are importing this for thunk

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;

      state.items = action.payload.items;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

// export const sendCartData = (cartData) => {
//   return async (dispatch) => {
//     // we return async func, we don't know who will execute the function, but inside we dispatch a notification action, create a new function in there we send request and then call it inside try catch
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data",
//       })
//     );

//     const sendRequest = async () => {
//       const res = await fetch(
//         "https://redux-advanced-87676-default-rtdb.firebaseio.com/items.json",
//         {
//           method: "PUT", // we also store data but new data won't be added on a list but overwrite data
//           body: JSON.stringify(cartData),
//         }
//       );
//       if (!res.ok) {
//         // throw new Error("Sending cart data failed"); instead I will dispatch an action
//         throw new Error("Sending data faild");
//       } // FOR HANDLING POTENTIAL ERROS NEW FUNCTION

//       const resData = await res.json();
//     };

//     try {
//       await sendRequest();
//       dispatch(
//         uiActions.showNotification({
//           status: "success", // used for css classes
//           title: "Sucess", //
//           message: "Sending cart data successfully",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Sending cart data failed",
//         })
//       );
//     }
//   };
// };

// WE CALL THIS INSIDE USE EFFECT IN APP

export const cartActions = cartSlice.actions;

export default cartSlice;
