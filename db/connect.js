require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = `mongodb+srv://nathan:sodja1234@@nodeexpressprojects.z3oom3q.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => {
    "connected to db";
  })
  .catch((err) => {
    console.error(err);
  });

console.log(process.env.MONGODB_PASSWORD);
