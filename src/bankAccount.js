'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(money, action) {
  this.amount += money;
  this.history.push(`${action}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, action) {
  this.amount -= money;
  this.history.push(`${action}: ${-money}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
