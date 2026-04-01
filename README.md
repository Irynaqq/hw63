# Homework 63 — Express, Cookies та JWT

## Опис
У цьому проєкті розширено Express сервер:

- підключено статичні файли (favicon)
- реалізовано збереження теми через cookies
- додано авторизацію за допомогою JWT

## Технології
- Node.js
- Express.js
- PUG
- EJS
- cookie-parser
- jsonwebtoken

## Запуск
```bash
npm install
npm start
```
## Основні маршрути
## Загальні
- GET / — головна сторінка
- GET /set-theme/:theme — зміна теми (light/dark)
## Users (PUG)
- GET /users
- GET /users/:userId
## Articles (EJS)
-GET /articles
-GET /articles/:articleId
-Auth (JWT)
-POST /auth/register
-POST /auth/login
## Додатково
- використовується cookies для збереження теми
- JWT зберігається у cookies (httpOnly)
- favicon доступний у всіх сторінках
- використано MVC структуру