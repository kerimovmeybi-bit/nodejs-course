const {
  addTask,
  getTasks,
  completeTask,
  deleteTask,
} = require('./modules/taskService');

const formatTask = require('./modules/taskFormatter');

console.log('=== Додаємо задачі ===');

addTask('Learn Node.js modules');
addTask('Practice fs module');
addTask('Build task tracker');

console.log('\n=== Список задач ===');

getTasks().forEach((task) => {
  console.log(formatTask(task));
});

console.log('\n=== Позначаємо задачу №2 виконаною ===');

completeTask(2);

console.log('\n=== Видаляємо задачу №1 ===');

deleteTask(1);

console.log('\n=== Оновлений список задач ===');

getTasks().forEach((task) => {
  console.log(formatTask(task));
});