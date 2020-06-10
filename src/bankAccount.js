'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney: function(amount, transaction) {
    this.amount += amount;
    this.accountHistory.push(`${transaction}: ${amount}`);
  },
  withdrawMoney: function(amount, transaction) {
    this.amount -= amount;
    this.accountHistory.push(`${transaction}: -${amount}`);
  },
  getAccountHistory: function() {
    return this.accountHistory;
  },
};

module.exports = BankAccount;
