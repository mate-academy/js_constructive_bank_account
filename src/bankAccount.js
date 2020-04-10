'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(addMoney, item) {
  this.amount += addMoney;
  this.item = item;
  this.history.push(`${this.item}: ${addMoney}`);
};

BankAccount.prototype.withdrawMoney = function(money, item) {
  this.amount -= money;
  this.item = item;
  this.history.push(`${this.item}: -${money}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
