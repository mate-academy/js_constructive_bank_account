'use strict';

function BankAccount(name, balance, birthdate) {
  this.name = name;
  this.birthdate = birthdate;
  this.balance = balance;
  this.accountHistory = [`Initial: ${this.balance}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.balance}$`;
  },

  addMoney: function(amount, transactionName) {
    this.balance += amount;
    this.accountHistory.push(`${transactionName}: ${amount}`);
  },

  withdrawMoney: function(amount, transactionName) {
    this.balance -= amount;
    this.accountHistory.push(`${transactionName}: ${-amount}`);
  },

  getAccountHistory: function() {
    return this.accountHistory;
  },
};

module.exports = BankAccount;
