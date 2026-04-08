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

  const [nameError, setNameError] = useState("");
  const [cgpaError, setCgpaError] = useState("");
  const [attendanceError, setAttendanceError] = useState("");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handlePrediction = async () => {
    setNameError("");
    setCgpaError("");
    setAttendanceError("");

    let valid = true;

    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else if (name.length > 50) {
      setNameError("Max 50 characters allowed");
      valid = false;
    }

    if (!cgpa) {
      setCgpaError("CGPA is required");
      valid = false;
    } else if (cgpa < 0 || cgpa > 10) {
      setCgpaError("CGPA must be between 0 and 10");
      valid = false;
    }

    if (!attendance) {
      setAttendanceError("Attendance is required");
      valid = false;
    } else if (attendance < 0 || attendance > 100) {
      setAttendanceError("Attendance must be between 0–100%");
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    setResult("");

    try {
      await fetch("https://jsonplaceholder.typicode.com/posts/1");

      let performance = cgpa >= 8 ? "Good" : "Average";
      let risk = attendance < 75 ? "High" : "Low";

      const finalResult = `Performance: ${performance}, Risk: ${risk}`;
      setResult(finalResult);

      // 🔥 ADD TO HISTORY
      setHistory([
        ...history,
        { name, cgpa, attendance, result: finalResult },
      ]);
    } catch (error) {
      setResult("Error fetching data");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
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
            error={!!nameError}
            helperText={nameError}
            style={{ marginTop: "15px" }}
          />

          <TextField
            label="CGPA"
            type="number"
            fullWidth
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            error={!!cgpaError}
            helperText={cgpaError}
            style={{ marginTop: "15px" }}
          />

          <TextField
            label="Attendance (%)"
            type="number"
            fullWidth
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            error={!!attendanceError}
            helperText={attendanceError}
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

          {loading && (
            <Typography style={{ marginTop: "15px" }}>
              Loading...
            </Typography>
          )}

          {result && (
            <Card
              style={{
                marginTop: "20px",
                backgroundColor: "#e3f2fd",
              }}
            >
              <CardContent>
                <Typography variant="h6">Prediction Result</Typography>
                <Typography style={{ marginTop: "10px" }}>
                  {result}
                </Typography>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* 🔥 HISTORY SECTION */}
      {history.length > 0 && (
        <Card style={{ width: "400px", marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h6">Previous Records</Typography>

            {history.map((item, index) => (
              <Typography key={index} style={{ marginTop: "10px" }}>
                {item.name} | CGPA: {item.cgpa} | Attendance: {item.attendance}
                <br />
                → {item.result}
              </Typography>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default App;