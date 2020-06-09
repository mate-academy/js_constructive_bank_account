'use strict';

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney: function(value, transaction) {
    this.amount += value;
    this.history.push(`${transaction}: ${value}`);
  },
  withdrawMoney: function(value, transaction) {
    this.amount -= value;
    this.history.push(`${transaction}: -${value}`);
  },
  getAccountHistory: function() {
    return this.history;
  },
};

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
};

module.exports = BankAccount;
