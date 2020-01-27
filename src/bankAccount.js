'use strict';

function BankAccount(name, initial) {
  this.name = name;
  this.amount = initial;
  this.transactions = [`Initial: ${initial}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(sum, transaction) {
  this.transactions = [...this.transactions, `${transaction}: ${sum}`];
  this.amount = this.amount + sum;
};

BankAccount.prototype.getAccountHistory = function() {
  return this.transactions;
};

BankAccount.prototype.withdrawMoney = function(sum, transaction) {
  this.transactions = [...this.transactions, `${transaction}: -${sum}`];
  this.amount = this.amount - sum;
};

module.exports = BankAccount;
