const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Настройка EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Profile
app.get('/profile', (req, res) => {
  res.render('profile', {
    name: 'Мейби Керимов',
    role: 'Студент курсу Node.js',
    hobbies: ['Спорт', 'Програмування', 'Ігри', 'Музика'],
    isOnline: true
  });
});

// Students
app.get('/students', (req, res) => {
  const students = [
    { name: 'Оля', level: 'junior' },
    { name: 'Максим', level: 'middle' },
    { name: 'Ірина', level: 'senior' }
  ];

  res.render('students', { students });
});

// 404
app.use((req, res) => {
  res.status(404).render('not-found', {
    url: req.url
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});