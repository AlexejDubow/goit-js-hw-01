"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const purchaseMessage = prompt(
  "Введите колиство ремонтных дроидов, которое Вы хотите приобрести?",
  "0"
);

if (purchaseMessage === null) {
  console.log("Отменено пользователем!");
} else {
  const totalPrice = purchaseMessage * pricePerDroid;
  if (credits < totalPrice) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${purchaseMessage} дроидов, на счету осталось ${credits - totalPrice} кредитов`
    );
  }
}
