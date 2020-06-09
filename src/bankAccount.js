'use strict';

function BankAccount(name, initialAmount) {
  this.name = name;
  this.amount = initialAmount;
  this.history = [`Initial: ${initialAmount}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney(value, reference) {
    this.amount += value;
    this.history.push(`${reference}: ${value}`);
  },

  withdrawMoney(value, reference) {
    this.amount -= value;
    this.history.push(`${reference}: -${value}`);
  },

  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
