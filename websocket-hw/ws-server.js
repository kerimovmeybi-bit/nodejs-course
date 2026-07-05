const { WebSocketServer } = require('ws');

const PORT = 8080;

const wss = new WebSocketServer({ port: PORT });

console.log(`WebSocket-сервер запущено: ws://localhost:${PORT}`);

wss.on('connection', (socket) => {
  console.log('Новий клієнт підключився');

  socket.on('message', (data) => {
    const text = data.toString();
    const time = new Date().toLocaleTimeString('uk-UA');

    const message = `[${time}] ${text}`;

    console.log('Отримано:', message);

    wss.clients.forEach((client) => {
      client.send(message);
    });
  });

  socket.on('close', () => {
    console.log('Клієнт відключився');
  });

  socket.on('error', (error) => {
    console.error('Помилка WebSocket:', error.message);
  });
});