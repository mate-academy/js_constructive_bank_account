'use strict';

function BankAccount(name, initialAmount) {
  this.name = name;
  this.initialAmount = initialAmount;

  this.amount = initialAmount;
  this.transactions = [`Initial: ${this.initialAmount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(amount, source) {
    this.transactions.push(`${source}: ${amount}`);
    this.amount += amount;
  },

  withdrawMoney: function(amount, purpose) {
    this.transactions.push(`${purpose}: -${amount}`);
    this.amount -= amount;
  },

  getAccountHistory: function() {
    return this.transactions;
  },
};

module.exports = BankAccount;
