const mongoose = require("mongoose");
const connectionString = `mongodb+srv://nathan:${process.env.MONGODB_PASSWORD}@nodeexpressprojects.z3oom3q.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = () => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
};

module.exports = connectDB;
