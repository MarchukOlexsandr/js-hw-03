let credits = 23580;
const price = 3000;

let quantity = prompt('Скільки телевізорів ви бажаєте купити?');
let totalPrice;
let remainingCredits;

if (quantity === null) {
  console.log(alert('Операцію скасовано!'));
} else {
  quantity = Number(quantity);
  totalPrice = price * quantity;

  if (totalPrice > credits) {
    console.log(alert('Недостатньо коштів на рахунку!'));
  } else {
    remainingCredits = credits - totalPrice;
    console.log (alert(`Ви купили ${quantity} телевізорів, на рахунку залишилось ${remainingCredits} кредитів.`));
  }
}
