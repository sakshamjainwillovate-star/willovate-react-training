import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePrediction = () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      setResult(`Prediction for "${input}": Success 🚀`);
      setLoading(false);
    }, 2000);
  };

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
      <Card style={{ width: "400px", padding: "20px", borderRadius: "15px" }}>
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h5">ML Dashboard 🚀</Typography>

          <TextField
            label="Enter Input"
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginTop: "20px" }}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handlePrediction}
            style={{ marginTop: "20px" }}
          >
            Run Model
          </Button>

          {loading && <Typography style={{ marginTop: "15px" }}>Loading...</Typography>}

          {result && (
            <Typography style={{ marginTop: "15px", fontWeight: "bold" }}>
              {result}
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;