"use strict";

const deliveryToChina = 100;
const deliveryToChile = 250;
const deliveryToAustralia = 170;
const deliveryToIndia = 80;
const deliveryToJamaica = 120;
const userChoice = prompt("Укажите страну доставки Вашей покупки", "Китай");

if (userChoice === null) {
  alert("Операция отменена пользователем!");
} else {
  switch (userChoice.toLowerCase()) {
    case "китай":
      console.log(`Доставка в Китай будет стоить ${deliveryToChina} кредитов`);
      break;
    case "чили":
      console.log(`Доставка в Чили будет стоить ${deliveryToChile} кредитов`);
      break;
    case "австралия":
      console.log(
        `Доставка в Австралию будет стоить ${deliveryToAustralia} кредитов`
      );
      break;
    case "индия":
      console.log(`Доставка в Индию будет стоить ${deliveryToIndia} кредитов`);
      break;
    case "ямайка":
      console.log(`Доставка в Ямайку будет стоить ${deliveryToJamaica} кредитов`);
      break;
    default:
      alert("В Вашей стране доставка не доступна");
  }
}
