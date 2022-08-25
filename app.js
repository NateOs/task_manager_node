require("dotenv").config();
const connectDB = require("./db/connect");

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");

const port = 5000;

// middleware
app.use(express.json());
app.use(express.static("./public")); // serve static files

// routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to node app!");
});

app.use("/api/v1/tasks", tasks);

// 404 error handler middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    await connectDB().then(
      app.listen(port, () => {
        console.log("Server listening on port " + port);
      }),
    );
  } catch (err) {
    throw err;
  }
};

startServer();
