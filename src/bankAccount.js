'use strict';

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.initAmount}$`;
  },
  addMoney: function(sum, incom) {
    this.initAmount += sum;
    this.history.push(`${incom}: ${sum}`);

    return `Name: ${this.name}, Amount: ${this.initAmount}$`;
  },
  withdrawMoney: function(sum, outcome) {
    this.initAmount -= sum;
    this.history.push(`${outcome}: -${sum}`);

    return `Name: ${this.name}, Amount: ${this.initAmount}$`;
  },
  getAccountHistory: function() {
    return this.history;
  },
};

function BankAccount(name, initAmount) {
  this.name = name;
  this.initAmount = initAmount;
  this.history = [`Initial: ${this.initAmount}`];
};

module.exports = BankAccount;
