import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }; // we set our notification with this object, we have status field, where we put in status, and title, where we put our message
    }, // now we want to dispatch this showNotification action when we start sending the data, when done and when we have error
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
