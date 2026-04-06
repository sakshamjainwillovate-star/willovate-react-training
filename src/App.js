import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Day 2 Practice 🚀</h1>

      <h2>Auto Counter: {count}</h2>

      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;