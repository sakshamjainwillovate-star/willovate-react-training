import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div
       style={{
         padding: "30px",
         background: "linear-gradient(to right, #4facfe, #00f2fe)",
         minHeight: "100vh",
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
  }}
>
      <Typography variant="h4" style={{ textAlign: "center", marginBottom: "20px" }}>
        API Data Dashboard 🚀
      </Typography>

      {loading && <Typography>Loading...</Typography>}

      {posts.map((post) => (
        <Card
  key={post.id}
  style={{
    marginBottom: "15px",
    width: "600px",
    borderRadius: "12px",
    boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
  }}
>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography>{post.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default App;