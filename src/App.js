import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

function App() {
  const [name, setName] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [attendance, setAttendance] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

 const handlePrediction = async () => {
  setLoading(true);
  setResult("");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();

    let performance = cgpa >= 8 ? "Good" : "Average";
    let risk = attendance < 75 ? "High" : "Low";

    setResult(`Performance: ${performance}, Risk: ${risk}`);
  } catch (error) {
    setResult("Error fetching data");
  }

  setLoading(false);
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
          <Typography variant="h5">Student ML Dashboard 🚀</Typography>

          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginTop: "15px" }}
          />

          <TextField
            label="CGPA"
            type="number"
            fullWidth
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            style={{ marginTop: "15px" }}
          />

          <TextField
            label="Attendance (%)"
            type="number"
            fullWidth
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            style={{ marginTop: "15px" }}
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