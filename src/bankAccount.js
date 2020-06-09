'use strict';

function BankAccount(name, income) {
  this.name = name;
  this.income = income;
  this.history = [`Initial: ${this.income}`];
}

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.income}$`;
  },

  addMoney: function(amount, operation) {
    this.income += amount;
    this.history.push(`${operation}: ${amount}`);
  },

  withdrawMoney: function(amount, operation) {
    this.income -= amount;
    this.history.push(`${operation}: ${-amount}`);
  },

  getAccountHistory: function() {
    return this.history;
  },

};

module.exports = BankAccount;
