import React, { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "400px",
          textAlign: "center",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Counter App 🚀
          </Typography>

          <Typography
            variant="h2"
            style={{ margin: "20px 0", fontWeight: "bold" }}
          >
            {count}
          </Typography>

          <div style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              onClick={() => setCount(count + 1)}
            >
              Increase
            </Button>

            <Button
              variant="outlined"
              onClick={() => setCount(count - 1)}
              style={{ marginLeft: "10px" }}
            >
              Decrease
            </Button>
          </div>

          <Button
            variant="text"
            onClick={() => setCount(0)}
            style={{ marginTop: "15px" }}
          >
            Reset
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;