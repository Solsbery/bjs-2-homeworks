"use strict";

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let x;
    let D = b ** 2 - 4 * a * c;

    if (D < 0) {
      return [];
    } else if (D === 0) {
      return [-b / 2 * a];
    } else {
      return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
    }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  if (isNaN(percent)) {
    return `Параметр <процентная ставка> содержит неправильное значение ${percent}`;
  }
  const parsedPercent = parseFloat(percent);

  if (isNaN(contribution)) {
    return `Параметр <сумма первоначального взноса> содержит неправильное значение ${contribution}`;
  }
  const parsedContribution = parseFloat(contribution);

  if (isNaN(amount)) {
    return `Параметр <сумма кредита> содержит неправильное значение ${amount}`;
  }
  const parsedAmount = parseFloat(amount);

  let creditAmount = parsedAmount - parsedContribution;
  let term = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
  let monthPercent = parsedPercent / 100 / 12;
  let monthPayment = creditAmount * (monthPercent + monthPercent / (((1 + monthPercent) ** term) - 1));
  totalAmount = monthPayment * term;
  console.log(totalAmount.toFixed(2));

  return parseFloat(totalAmount.toFixed(2))
}
