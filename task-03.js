"use strict";

let message;
const userAnswer = prompt("Введите свой пароль", "");
const ADMIN_PASSWORD = "jqueryismyjam";

if (userAnswer === null) {
  message = "Отменено пользователем!";
} else if (userAnswer === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
