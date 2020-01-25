'use strict';

function BankAccount(name, initialAmount) {
  this.name = name;
  this.amount = initialAmount;
  this.history = [`Initial: ${initialAmount}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(money, transaction) {
  this.amount += money;
  this.history.push(`${transaction}: ${money}`);

  return `${this.amount}, ${this.transaction}`;
};

BankAccount.prototype.withdrawMoney = function(money, transaction) {
  this.amount -= money;
  this.history.push(`${transaction}: -${money}`);

  return `${this.amount}, ${this.transaction}`;
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
