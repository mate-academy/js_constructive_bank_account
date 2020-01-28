'use strict';

function BankAccount(name, money) {
  this.name = name;
  this.money = money;
  this.history = [`Initial: ${this.money}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.addMoney = function(money, description) {
  this.money += money;
  this.history.push(`${description}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, description) {
  this.money -= money;
  this.history.push(`${description}: -${money}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
