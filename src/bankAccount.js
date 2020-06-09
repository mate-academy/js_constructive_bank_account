'use strict';

function BankAccount(name, initialSum) {
  this.name = name;
  this.money = initialSum;
  this.history = [`Initial: ${initialSum}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.money}$`;
  },
  addMoney: function(deposit, source) {
    this.money += deposit;
    this.history.push(`${source}: ${deposit}`);
  },
  withdrawMoney: function(expenses, purpose) {
    this.money -= expenses;
    this.history.push(`${purpose}: -${expenses}`);
  },
  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
