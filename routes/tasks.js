const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateSingleTask,
  deleteTask,
} = require("../controllers/tasks");

// routes for tasks
router.route("/").get(getAllTasks);
router.route("/").post(createTask);
router.route("/:id").get(getSingleTask);
router.route("/:id").patch(updateSingleTask);
router.route("/:id").delete(deleteTask);

// app.get("/api/v1/tasks") 	     - get all the task
// app.post("/api/v1/tasks")		 - create a new task
// app.get("/api/v1/tasks/:id)       - get a task
// app.patch("/api/v1/tasks/:id)     - update a task
// app.delete("/api/v1/tasks/:id")   - delete a task

module.exports = router;
