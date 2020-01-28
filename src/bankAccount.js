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

  addMoney: function(profit, target) {
    this.amount += profit;
    this.history.push(`${target}: ${profit}`);
  },

  withdrawMoney: function(cost, target) {
    this.amount -= cost;
    this.history.push(`${target}: -${cost}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
