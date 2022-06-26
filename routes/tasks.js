const express = require("express");
const router = express.router();

// routes for tasks


app.get("/hello", (req, res) => {
  res.status(200).send("Welcome to node app!");
});

// app.get("/api/v1/tasks") 	     - get all the task
// app.post("/api/v1/tasks")		 - create a new task
// app.get("/api/v1/tasks/:id)       - get a task
// app.patch("/api/v1/tasks/:id)     - update a task
// app.delete("/api/v1/tasks/:id")   - delete a task
