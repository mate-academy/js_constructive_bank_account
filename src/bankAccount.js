'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(money, target) {
  this.target = target;
  this.amount += money;
  this.history.push(`${this.target}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, target) {
  this.target = target;
  this.amount -= money;
  this.history.push(`${this.target}: -${money}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
