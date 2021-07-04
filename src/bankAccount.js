'use strict';

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.money}$`;
  },

  addMoney: function(amount, purpose) {
    this.money += amount;
    this.accountHistory.push(`${purpose}: ${amount}`);
  },

  withdrawMoney: function(amount, purpose) {
    this.money -= amount;
    this.accountHistory.push(`${purpose}: -${amount}`);
  },

  getAccountHistory: function() {
    return this.accountHistory;
  },
};

function BankAccount(name, money) {
  this.name = name;
  this.money = money;
  this.accountHistory = [`Initial: ${money}`];
};

module.exports = BankAccount;
