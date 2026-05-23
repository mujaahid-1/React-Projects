import { useState } from "react";

export default function App() {
  return <CounterApp />;
}

function CounterApp() {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div className="container">
      <div className="counter-app">
        <h1>{counterValue}</h1>
        <div className="btns">
          <button className="btn increment-btn"
            onClick={() => setCounterValue((counterValue) => counterValue + 1)}
          >
            +
          </button>
          <button className="decrement-btn btn"
            onClick={() => setCounterValue((counterValue) => counterValue - 1)}
          >
            -
          </button>
          <button className="reset-btn btn" onClick={() => setCounterValue(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}
