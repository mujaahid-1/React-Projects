import { useState } from "react";

export default function App() {
  const [bgColor, setBgColor] = useState("white");
  return (
    <div
      style={{ backgroundColor: bgColor, padding: "50px", minHeight: "100vh" }}
    >
      <ColorSwitch color="red" onClick={() => setBgColor("red")}>
        Red
      </ColorSwitch>
      <ColorSwitch color="blue" onClick={() => setBgColor("blue")}>
        Blue
      </ColorSwitch>
      <ColorSwitch color="green" onClick={() => setBgColor("green")}>
        Green
      </ColorSwitch>
      <ColorSwitch color="yellow" onClick={() => setBgColor("yellow")}>
        Yellow
      </ColorSwitch>
    </div>
  );
}

function ColorSwitch({ children, onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "black",
        padding: "10px 20px",
        margin: "5px",
      }}
    >
      {children}
    </button>
  );
}
