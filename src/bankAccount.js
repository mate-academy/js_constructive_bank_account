'use strict';

function BankAccount(name, money) {
  this.name = name;
  this.money = money;
  this.history = [`Initial: ${money}`];
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.addMoney = function(money, transaction) {
  this.money += money;
  this.history.push(`${transaction}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, transaction) {
  this.money -= money;
  this.history.push(`${transaction}: -${money}`);
};

module.exports = BankAccount;
