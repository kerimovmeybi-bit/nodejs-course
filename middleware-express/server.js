const express = require('express');

const app = express();
const PORT = 3000;

// Middleware-логер
app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.url} — ${new Date().toLocaleString('uk-UA')}`
  );
  next();
});

// Middleware для JSON
app.use(express.json());

// Статичні файли
app.use(express.static('public'));

// Головна сторінка
app.get('/', (req, res) => {
  res.send('Головна сторінка');
});

// About
app.get('/about', (req, res) => {
  res.send('Сторінка About');
});

// POST /feedback
app.post('/feedback', (req, res) => {
  const { name, message } = req.body;

  if (!name) {
    return res.status(400).send('Поле name є обовʼязковим');
  }

  res.send(`Дякуємо, ${name}! Ваш відгук отримано.`);
});

// Маршрут для тестування помилки
app.get('/crash', (req, res) => {
  throw new Error('Тестова помилка');
});

// 404
app.use((req, res) => {
  res.status(404).send('Сторінку не знайдено');
});

// Глобальний обробник помилок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Щось пішло не так!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});