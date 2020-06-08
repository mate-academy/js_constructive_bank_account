'use strict';

function BankAccount(name, amount) {
  // Write your code here
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(money, info) {
    this[info] = money;
    this.history.push(`${info}: ${money}`);
    this.amount += money;
  },

  withdrawMoney: function(money, info) {
    this[info] = money;
    this.amount -= money;
    this.history.push(`${info}: -${money}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
