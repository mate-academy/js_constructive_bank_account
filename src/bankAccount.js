'use strict';

function BankAccount(name, money, age) {
  this.name = name;
  this.money = money;
  this.age = age;
  this.transactions = [`Initial: ${money}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.money}$`;
  },
  addMoney(cash, comment) {
    this.money += cash;
    this.transactions.push(`${comment}: ${cash}`);
  },
  withdrawMoney(cash, comment) {
    if (this.money < cash) {
      return 'Not enough money';
    };

    this.money -= cash;
    this.transactions.push(`${comment}: -${cash}`);
  },
  getAccountHistory() {
    return this.transactions;
  },
};

module.exports = BankAccount;
