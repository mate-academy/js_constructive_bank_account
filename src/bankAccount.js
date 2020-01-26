'use strict';

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  getAccountHistory: function() {
    return this.amountHistory;
  },
  addMoney: function(money, infoTransaction) {
    this.amount += money;
    this.amountHistory.push(`${infoTransaction}: ${money}`);
  },
  withdrawMoney: function(money, infoTransaction) {
    this.amount -= money;
    this.amountHistory.push(`${infoTransaction}: -${money}`);
  },
};

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.amountHistory = [`Initial: ${amount}`];
};

module.exports = BankAccount;
