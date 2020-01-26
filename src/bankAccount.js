'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [];
  this.history.push(`Initial: ${this.amount}`);
}

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(money, destination) {
    this.amount += money;
    this.history.push(`${destination}: ${money}`);
  },

  withdrawMoney: function(money, destination) {
    this.amount -= money;
    this.history.push(`${destination}: -${money}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
