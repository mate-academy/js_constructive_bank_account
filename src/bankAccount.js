'use strict';

function BankAccount(name, initial) {
  this.name = name;
  this.amount = initial;
  this.transactions = [`Initial: ${initial}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(sum, transactoin) {
  const balance = this.amount + sum;

  this.transactions = [...this.transactions, `${transactoin}: ${sum}`];
  this.amount = balance;
};

BankAccount.prototype.getAccountHistory = function() {
  return this.transactions;
};

BankAccount.prototype.withdrawMoney = function(sum, transactoin) {
  const balance = this.amount - sum;

  this.transactions = [...this.transactions, `${transactoin}: -${sum}`];
  this.amount = balance;
};

module.exports = BankAccount;
