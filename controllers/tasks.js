const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// without async fxn, the status will be returned before the task
// is created, hence an empty object

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: "Task not found with id " + taskId });
  }
  res.status(200).json({ task });
});

const updateSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!task) {
    res.status(404).json({ msg: "Task not found" });
  }
  res.status(200).send({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: `Task not found with ID: ${taskId}` });
  }
  res.status(200).json({
    task: task,
    status: "deleted",
  });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateSingleTask,
  deleteTask,
};
