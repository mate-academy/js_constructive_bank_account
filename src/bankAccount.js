'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(money, action) {
    this.amount += money;
    this.history.push(`${action}: ${money}`);
  },

  withdrawMoney: function(money, action) {
    this.amount -= money;
    this.history.push(`${action}: ${-money}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
