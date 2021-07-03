'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.transactionHistory = [`Initial: ${amount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney: function(amountMoney, transaction) {
    this.amount += amountMoney;
    this.transactionHistory.push(`${transaction}: ${amountMoney}`);
  },
  withdrawMoney: function(price, transaction) {
    this.amount -= price;
    this.transactionHistory.push(`${transaction}: -${price}`);
  },
  getAccountHistory: function() {
    return this.transactionHistory;
  },
};

module.exports = BankAccount;
