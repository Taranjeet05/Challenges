import React from "react";
import "./App.css";

export default function App() {
  const handleClick = () => {
    alert("You clicked me!");
  };

  return (
    <Button color="blue" disabled={false} text="Click Me" onClick={handleClick} />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ color: color, height: "100px" }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
