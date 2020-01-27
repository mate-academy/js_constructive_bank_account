'use strict';

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(money, info) {
    this.amount += money;
    this.accountHistory.push(`${info}: ${money}`);
  },

  withdrawMoney: function(money, info) {
    this.amount -= money;
    this.accountHistory.push(`${info}: -${money}`);
  },

  getAccountHistory: function() {
    return this.accountHistory;
  },
};

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${amount}`];
}

module.exports = BankAccount;
