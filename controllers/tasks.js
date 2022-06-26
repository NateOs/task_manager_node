const getAllTasks = (req, res) => {
  res.send("all items");
};
const createTask = (req, res) => {
  res.send("create task");
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
