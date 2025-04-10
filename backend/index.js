//const express = require('express');
import express from "express";

const app = express();

/* app.get("/", (req, res) => {
  res.send("Hello World!");
}); */

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the chicken cross the road? To get to the other side!",
    },
    {
      id: 2,
      title:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    { 
      id: 3, 
      title: "What do you call fake spaghetti? An impasta!" 
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
