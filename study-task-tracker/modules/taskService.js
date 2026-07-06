const crypto = require('crypto');

function createTask(title, tasks) {
  const nextId =
    tasks.length > 0
      ? Math.max(...tasks.map((task) => task.id)) + 1
      : 1;

  return {
    id: nextId,
    title,
    completed: false,
    hash: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
}

function getTaskById(tasks, id) {
  return tasks.find((task) => task.id === id);
}

module.exports = {
  createTask,
  getTaskById,
};