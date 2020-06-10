'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney(money, target) {
    this.amount += money;
    this.history.push(`${target}: ${money}`);
  },

  withdrawMoney(money, target) {
    this.target = target;
    this.amount -= money;
    this.history.push(`${this.target}: -${money}`);
  },

  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
