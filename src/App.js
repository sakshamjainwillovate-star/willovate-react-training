import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Willovate React Training 🚀</h1>
      <h2>Counter: {count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
  Reset
</button>
    </div>
  );
}

export default App;