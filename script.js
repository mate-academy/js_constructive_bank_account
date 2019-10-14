'use strict';
function Person(name, dateOfBirth, moneyAmount) {
  this.name = name;
  [this.dayOfBirth, this.monthOfBirth, this.yearOfBirth, this.dateOfBirth] = [...dateOfBirth.split('.'), dateOfBirth];
  this.moneyAmount = moneyAmount;
  this.accountHistory = [{transactionInfo: 'Initial', money: moneyAmount}]
}
Person.prototype.getInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this._getAge()}, Amount: ${this.moneyAmount}$`);
  return `Name: ${this.name}, Age: ${this._getAge()}, Amount: ${this.moneyAmount}$`;
}
Person.prototype._getAge = function () {
  let date = new Date();
  let [year, month, day] = [date.getFullYear(), (date.getMonth() + 1), date.getDate()];
  let age = year - this.yearOfBirth;
  if (month < +this.monthOfBirth ||
    (month === +this.monthOfBirth) && (day < +this.dayOfBirth)) {
    return --age;
  }
  return age;
}
Person.prototype._changeMoneyHistory = function (money, transactionInfo) {
  this.accountHistory.push({transactionInfo: transactionInfo, money: money});
  this.moneyAmount += money;
  return this.moneyAmount;
}
Person.prototype.addMoney = function (money, transactionInfo) {
  return this._changeMoneyHistory(money, transactionInfo);
}
Person.prototype.withdrawMoney = function (money, transactionInfo) {
  return this._changeMoneyHistory(money * (-1), transactionInfo);
}
Person.prototype.getAccountHistory = function () {
  let arrHistory = [];
  for (let item of this.accountHistory) {
    arrHistory.push(`${item.transactionInfo}: ${item.money}`);
  }
  console.log(arrHistory);
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
