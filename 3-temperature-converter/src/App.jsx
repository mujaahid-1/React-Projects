import { useState } from "react";

export default function App() {
  return <TempConverter />;
}

function TempConverter() {
  const [celcius, setCelcius] = useState("");
  console.log(celcius);

  function handleReset() {
    setCelcius("");
  }

  const fahrenheit = (celcius * 1.8 + 32).toFixed(2);

  return (
    <div className="container">
      <div className="temperature">
        <input
          type="number"
          step="any"
          value={celcius}
          onChange={(e) => setCelcius(e.target.value)}
          placeholder="Temperature in °C..."
        />
        {celcius !== "" && <p>{`${celcius}°C = ${fahrenheit}°F`}</p>}
        {celcius !== "" && <button onClick={handleReset}>Reset</button>}
      </div>
    </div>
  );
}
