# Study Task Tracker

ДЗ 10

## Опис проєкту

У цьому завданні було створено простий трекер задач із використанням власних модулів Node.js.

Проєкт демонструє:

- використання `require`
- використання `module.exports`
- створення власних модулів
- роботу з функціями
- організацію коду за допомогою окремих файлів

## Структура проєкту

```text
study-task-tracker/
│
├── app.js
│
└── modules/
    ├── taskService.js
    └── taskFormatter.js
```

ДЗ 11

# Study Task Tracker — File Storage

## Опис проєкту

У цьому завданні було розширено попередній проєкт Study Task Tracker.

Тепер задачі не зберігаються лише в пам'яті програми, а записуються у файл `tasks.json`, що дозволяє зберігати дані між запусками застосунку.

## Використані модулі Node.js

- `fs` — для роботи з файловою системою
- `path` — для формування коректних шляхів до файлів і директорій

## Структура проєкту

text
study-task-tracker/
│
├── app.js
│
├── data/
│ tasks.json
│
└── modules/
taskService.js
taskFormatter.js
fileStorage.js
