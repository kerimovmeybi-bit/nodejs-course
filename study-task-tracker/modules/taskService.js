let tasks = [];
let nextId = 1;

function addTask(title) {
  const task = {
    id: nextId++,
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);

  return task;
}

function getTasks() {
  return tasks;
}

function completeTask(id) {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = true;
  }

  return task;
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}

module.exports = {
  addTask,
  getTasks,
  completeTask,
  deleteTask,
};