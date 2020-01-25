'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.birthDay = '01.01.2000';
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];
}

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(amount, income) {
    this.amount += amount;
    this.accountHistory.push(`${income}: ${amount}`);
  },

  withdrawMoney: function(amount, spending) {
    this.amount -= amount;
    this.accountHistory.push(`${spending}: -${amount}`);
  },

  getAccountHistory: function() {
    return this.accountHistory;
  },
};

module.exports = BankAccount;
