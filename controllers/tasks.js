const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all items");
};

// without async fxn, the status will be returned before the task
// is created, hence an empty object

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = (req, res) => {
  const id = req.params.id;
  res.send(`get single task ${id}`);
};

const updateSingleTask = (req, res) => {
  res.send("update single task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateSingleTask,
  deleteTask,
};
