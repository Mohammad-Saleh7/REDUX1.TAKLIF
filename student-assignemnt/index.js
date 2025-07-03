// explain below concepts and write an example for each one

// action:
// const action = {
//   type: "INCREMENT",
//   payload: 1,
// };
/////////////////////////////////////////
// action creator:
// const increment = () => {
//   return {
//     type: "INCREMENT",
//     payload: 1,
//   };
// };

// const action = increment();
/////////////////////////////////////////
// reducer:
// const initialState = {
//   conter: 0,
// };

// const reducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return state + action.payload;
//   } else {
//     state;
//   }
// };
//////////////////////////////////////////////////
// store:
// import { createStore } from "redux";

// function counterReducer(state = 0, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + action.payload;
//     case "DECREMENT":
//       return state - action.payload;
//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer);

// store.subscribe(() => {
//   console.log("Current state:", store.getState());
// });

// store.dispatch({ type: "INCREMENT", payload: 1 });
// store.dispatch({ type: "INCREMENT", payload: 2 });
// store.dispatch({ type: "DECREMENT", payload: 1 });
