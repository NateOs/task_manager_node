const mongoose = require("mongoose");
const connectionString = `mongodb+srv://nathan:${process.env.MONGODB_PASSWORD}@nodeexpressprojects.z3oom3q.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.error(err);
  });
