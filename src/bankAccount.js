'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
}

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(money, reason) {
    this.amount += money;
    this.history.push(`${reason}: ${money}`);
  },

  withdrawMoney: function(money, reason) {
    this.amount -= money;
    this.history.push(`${reason}: -${money}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
