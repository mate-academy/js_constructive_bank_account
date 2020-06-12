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
  addMoney(money, source) {
    this.amount += money;
    this.history.push(`${source}: ${money}`);
  },
  withdrawMoney(money, purpose) {
    this.amount -= money;
    this.history.push(`${purpose}: -${money}`);
  },
  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
