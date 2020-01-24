'use strict';

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(amountAddedMoney, info) {
    this.amount += amountAddedMoney;
    this.history.push(`${info}: ${amountAddedMoney}`);
  },

  withdrawMoney: function(amountWithdrawedMoney, info) {
    this.amount -= amountWithdrawedMoney;
    this.history.push(`${info}: -${amountWithdrawedMoney}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [];
  this.history.push(`Initial: ${this.amount}`);
};

module.exports = BankAccount;
