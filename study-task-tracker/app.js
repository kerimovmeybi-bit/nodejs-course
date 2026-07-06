const {
  initStorage,
  readTasks,
  saveTasks,
} = require('./modules/fileStorage');

const formatTask = require('./modules/taskFormatter');

initStorage();

const tasks = [
  {
    id: 1,
    title: 'Learn fs module',
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Practice path module',
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Save tasks to JSON',
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

saveTasks(tasks);

const storedTasks = readTasks();

console.log('=== Tasks from file ===');

storedTasks.forEach((task) => {
  console.log(formatTask(task));
});