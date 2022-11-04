export default function Counter({ state, dispatch }) {
    return (
      <div className="counter--container">
        <h1>Counter App</h1>
        <p>Count: {state.count}</p>
        <input type="number" value={state.count} onChange={(e) => dispatch({ type: "set", valued: e })} />
        <button onClick={() => dispatch({ type: "incrementBy", payload: 10 })}>
        Increment by 10
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "decrementBy", payload: 10 })}>
        Decrement by 10
        </button>
      </div>
    );
  }