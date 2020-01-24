'use strict';

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.totalAmount}$`;
  },

  addMoney: function(amount, source) {
    this.transactions.push(`${source}: ${amount}`);
    this.totalAmount += amount;
  },

  withdrawMoney: function(amount, purpose) {
    this.transactions.push(`${purpose}: -${amount}`);
    this.totalAmount -= amount;
  },

  getAccountHistory: function() {
    return this.transactions;
  },
};

function BankAccount(name, initialAmount) {
  this.name = name;
  this.initialAmount = initialAmount;

  this.totalAmount = initialAmount;
  this.transactions = [`Initial: ${this.initialAmount}`];
};

module.exports = BankAccount;
