import React, { useState } from 'react';
import "./App.css";

export default function App() {

  const [isActive, setIsActive] = useState(false);

  
  function handleClick() {
    setIsActive(!isActive);
  
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>

        
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}

