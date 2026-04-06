import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function App() {
  const [name, setName] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [attendance, setAttendance] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePrediction = async () => {
    if (!name || !cgpa || !attendance) {
      setResult("Please fill all fields");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      await response.json();

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
      <Card
        style={{
          width: "400px",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h5">Student ML Dashboard 🚀</Typography>

          {/* Name with max 50 characters */}
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => {
              if (e.target.value.length <= 50) {
                setName(e.target.value);
              }
            }}
            inputProps={{ maxLength: 50 }}
            style={{ marginTop: "15px" }}
          />

          {/* CGPA (0–10 validation) */}
          <TextField
            label="CGPA"
            type="number"
            fullWidth
            value={cgpa}
            onChange={(e) => {
              let value = e.target.value;
              if (value >= 0 && value <= 10) {
                setCgpa(value);
              }
            }}
            inputProps={{ min: 0, max: 10 }}
            style={{ marginTop: "15px" }}
          />

          {/* Attendance (0–100 validation) */}
          <TextField
            label="Attendance (%)"
            type="number"
            fullWidth
            value={attendance}
            onChange={(e) => {
              let value = e.target.value;
              if (value >= 0 && value <= 100) {
                setAttendance(value);
              }
            }}
            inputProps={{ min: 0, max: 100 }}
            style={{ marginTop: "15px" }}
          />

          {/* Button */}
          <Button
            variant="contained"
            fullWidth
            onClick={handlePrediction}
            style={{ marginTop: "20px" }}
          >
            Run Model
          </Button>

          {/* Loading */}
          {loading && (
            <Typography style={{ marginTop: "15px" }}>
              Loading...
            </Typography>
          )}

          {/* Result */}
          {result && (
            <Card
              style={{
                marginTop: "20px",
                backgroundColor: "#e3f2fd",
              }}
            >
              <CardContent>
                <Typography variant="h6">
                  Prediction Result
                </Typography>

                <Typography style={{ marginTop: "10px" }}>
                  {result}
                </Typography>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;