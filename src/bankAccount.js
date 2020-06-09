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

  addMoney: function(amount, purpose) {
    this.amount += amount;
    this.accountHistory.push(`${purpose}: ${amount}`);
  },

  withdrawMoney: function(amount, purpose) {
    this.amount -= amount;
    this.accountHistory.push(`${purpose}: -${amount}`);
  },

  getAccountHistory: function() {
    return this.accountHistory;
  },
};

module.exports = BankAccount;
