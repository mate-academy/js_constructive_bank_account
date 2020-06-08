'use strict';

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney: function(value, assignment) {
    this.amount += value;
    this.accountHistory.push(`${assignment}: ${value}`);
  },
  withdrawMoney: function(value, purpose) {
    this.amount -= value;
    this.accountHistory.push(`${purpose}: -${value}`);
  },
  getAccountHistory: function() {
    return this.accountHistory;
  },
};

function BankAccount(name, value) {
  this.name = name;
  this.amount = value;
  this.accountHistory = [`Initial: ${value}`];
};

module.exports = BankAccount;
