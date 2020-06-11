'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney(money, fromWhat) {
    this.amount += money;
    this.history.push(`${fromWhat}: ${money}`);
  },
  withdrawMoney(money, forWhat) {
    this.amount -= money;
    this.history.push(`${forWhat}: -${money}`);
  },
  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
