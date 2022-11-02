import { useReducer } from "react";

export default function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "increment":
          return { count: state.count + 1 };
        case "decrement":
          return { count: state.count - 1 };
        case "reset":
          return { count: 0 };
        case "set":
          return { count: action.payload };
        case "incrementBy":
          return { count: state.count + action.payload };
        case "decrementBy":
          return { count: state.count - action.payload };
        default:
          return state;
      }
    },
    { count: 0 }
  );

  return (
    <div className="container">
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "decrementBy", payload: 10 })}>
        Decrement by 10
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "set", payload: 10 })}>
        Set Value to 10
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "incrementBy", payload: 10 })}>
        Increment by 10
      </button>
    </div>
  );
}