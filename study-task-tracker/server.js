const http = require('http');

const {
  readTasks,
  saveTasks,
} = require('./modules/fileStorage');

const {
  createTask,
  getTaskById,
} = require('./modules/taskService');

const { logEvent } = require('./modules/eventLogger');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(
    req.url,
    `http://${req.headers.host}`
  );

  // GET /
  if (
    parsedUrl.pathname === '/' &&
    req.method === 'GET'
  ) {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });

    res.end('<h1>Study Task Tracker API</h1>');
    return;
  }

  // GET /tasks
  if (
    parsedUrl.pathname === '/tasks' &&
    req.method === 'GET'
  ) {
    let tasks = readTasks();

    const status =
      parsedUrl.searchParams.get('status');

    if (status === 'completed') {
      tasks = tasks.filter(
        (task) => task.completed
      );
    }

    if (status === 'active') {
      tasks = tasks.filter(
        (task) => !task.completed
      );
    }

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify(tasks));

    return;
  }

  // GET /tasks/:id
  if (
    parsedUrl.pathname.startsWith('/tasks/') &&
    req.method === 'GET'
  ) {
    const id = Number(
      parsedUrl.pathname.split('/')[2]
    );

    const tasks = readTasks();

    const task = getTaskById(tasks, id);

    if (!task) {
      res.writeHead(404, {
        'Content-Type': 'application/json',
      });

      res.end(
        JSON.stringify({
          error: 'Task not found',
        })
      );

      return;
    }

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify(task));

    return;
  }

  // POST /tasks
  if (
    parsedUrl.pathname === '/tasks' &&
    req.method === 'POST'
  ) {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const { title } = JSON.parse(body);

        const tasks = readTasks();

        const newTask = createTask(
          title,
          tasks
        );

        tasks.push(newTask);

        saveTasks(tasks);

        try {
          logEvent('taskCreated', {
            id: newTask.id,
            title: newTask.title,
          });

          console.log(
            'Event logged successfully'
          );
        } catch (error) {
          console.error(
            'Error writing log:',
            error
          );
        }

        res.writeHead(201, {
          'Content-Type': 'application/json',
        });

        res.end(
          JSON.stringify(newTask)
        );
      } catch (error) {
        console.error(error);

        res.writeHead(400, {
          'Content-Type': 'application/json',
        });

        res.end(
          JSON.stringify({
            error: 'Invalid JSON',
          })
        );
      }
    });

    return;
  }

  // 404
  res.writeHead(404, {
    'Content-Type': 'application/json',
  });

  res.end(
    JSON.stringify({
      error: 'Route not found',
    })
  );
});

server.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});