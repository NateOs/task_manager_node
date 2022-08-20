const mongoose = require("mongoose");

//* a schema is created
//! Only properties that are created in schema will be created in the db
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [50, "name cannot exceed 50 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//* a model is created from the schema
//* a model makes it easier to interface with mongodb db through CRUD operations in the Controllers
module.exports = mongoose.model("Task", TaskSchema);
