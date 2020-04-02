'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.result = [`Initial: ${amount}`]
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(money, action) {
  this.amount += money;
  this.action = action;
  this.result.push(`${this.action}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, action) {
  this.amount -= money;
  this.action = action;
  this.result.push(`${this.action}: -${money}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.result;
};

module.exports = BankAccount;
