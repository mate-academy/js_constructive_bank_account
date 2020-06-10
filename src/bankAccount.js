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

  addMoney(value, operation) {
    this.amount += value;
    this.history.push(`${operation}: ${value}`);
  },

  withdrawMoney(value, operation) {
    this.amount -= value;
    this.history.push(`${operation}: -${value}`);
  },

  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
