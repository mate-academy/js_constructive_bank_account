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

  addMoney: function(profit, source) {
    this.amount += profit;
    this.history.push(`${source}: ${profit}`);
  },

  withdrawMoney: function(cost, source) {
    this.amount -= cost;
    this.history.push(`${source}: -${cost}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
