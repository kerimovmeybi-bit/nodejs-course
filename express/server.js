const express = require('express');

const app = express();
const PORT = 3000;

// Главная страница
app.get('/', (req, res) => {
  res.send('Головна сторінка');
});

// Про нас
app.get('/about', (req, res) => {
  res.send('Сторінка "Про нас"');
});

// Текущее время
app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleString();
  res.send(`Поточний час: ${currentTime}`);
});

// Ошибка 500
app.get('/error', (req, res) => {
  res.status(500).send('Помилка сервера');
});

// Динамический маршрут
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Користувач з ID: ${id}`);
});

// Query-параметры
app.get('/search', (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).send('Не вказано пошуковий запит');
  }

  res.send(`Ви шукали: ${q}`);
});

// Params + Query
app.get('/user/:id/orders', (req, res) => {
  const { id } = req.params;
  const { status } = req.query;

  res.send(
    `Замовлення користувача ${id} зі статусом: ${status || 'не вказано'}`
  );
});

// 404 для всех остальных маршрутов
app.use((req, res) => {
  res.status(404).send('Сторінку не знайдено');
});

app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});