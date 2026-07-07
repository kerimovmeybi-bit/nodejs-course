const crypto = require('crypto');

function createTask(title, tasks) {
  const nextId =
    tasks.length > 0
      ? Math.max(...tasks.map((task) => task.id)) + 1
      : 1;

  const createdAt =
    new Date().toISOString();

  const hash = crypto
    .createHash('sha256')
    .update(
      `${nextId}-${title}-${createdAt}`
    )
    .digest('hex');

  return {
    id: nextId,
    title,
    completed: false,
    createdAt,
    hash,
  };
}

module.exports = {
  createTask,
};