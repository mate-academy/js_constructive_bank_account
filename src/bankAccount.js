'use strict';

function BankAccount(name, initialAmount, dateOfBirth) {
  this.name = name;
  this.birth = `${dateOfBirth}`;
  this.amount = initialAmount;
  this.history = [`Initial: ${initialAmount}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney(value, source) {
    this.amount += value;
    this.history.push(`${source}: ${value}`);
  },

  withdrawMoney(value, purpose) {
    this.amount -= value;
    this.history.push(`${purpose}: -${value}`);
  },

  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
