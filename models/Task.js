const mongoose = require("mongoose");

//* a schema is created
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

//* a model is created from the schema
//* a model makes it easier to interface with mongodb db through CRUD operations in the Controllers
module.exports = mongoose.model("Task", TaskSchema);
