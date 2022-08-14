require("dotenv").config();
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const port = 5000;

//middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to node app!");
});

app.use("/api/v1/tasks", tasks);

app.listen(5000, () => {
  console.log("Server listening on port " + port);
});
