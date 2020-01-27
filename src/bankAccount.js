'use strict';

function BankAccount(name, initialAmount) {
  this.name = name;
  this.initialAmount = initialAmount;
  this.history = [`Initial: ${this.initialAmount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.initialAmount}$`;
  },

  addMoney: function(sum, transactionIncome) {
    this.initialAmount += sum;
    this.history.push(`${transactionIncome}: ${sum}`);

    return `Name: ${this.name}, Amount: ${this.initialAmount}$`;
  },

  withdrawMoney: function(sum, outcome) {
    this.initialAmount -= sum;
    this.history.push(`${outcome}: -${sum}`);

    return `Name: ${this.name}, Amount: ${this.initialAmount}$`;
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
