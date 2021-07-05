'use strict';
BankAccount.prototype = {
  getInfo: function () {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function (account, transaction) {
    this.amount += +account;
    this.history.push(`${transaction}: ${account}`);
  },

  withdrawMoney: function (account, transaction) {
    this.amount -= account;
    this.history.push(`${transaction}: -${account}`);
  },

  getAccountHistory: function () {
    return this.history;
  }
};

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
}

module.exports = BankAccount;
