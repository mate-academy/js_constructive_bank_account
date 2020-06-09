'use strict';

function BankAccount(name, balance, birthdate) {
  this.name = name;
  this.dateOfBirth = birthdate;
  this.balance = balance;
  this.accountHistory = [`Initial: ${this.balance}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.balance}$`;
  },

  addMoney: function(amount, transactionName) {
    this.accountHistory.push(`${transactionName}: ${amount}`);
    this.balance = this.balance + amount;
  },

  withdrawMoney: function(amount, transactionName) {
    this.accountHistory.push(`${transactionName}: ${-amount}`);
    this.balance = this.balance - amount;
  },

  getAccountHistory: function() {
    return this.accountHistory;
  },
};

module.exports = BankAccount;
