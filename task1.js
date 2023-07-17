const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let userPassword = prompt("Введіть пароль для доступу до панелі управління:");

if (userPassword === null) {
  message = alert("Операцію скасовано!");
} else if (userPassword === ADMIN_PASSWORD) {
  message = alert("Ласкаво просимо!");
} else {
  message = alert("Доступ заборонено, невірний пароль!");
}

message;
