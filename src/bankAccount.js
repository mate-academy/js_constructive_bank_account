'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(money, info) {
  this.amount += money;
  this.history = [...this.history, `${info}: ${money}`];
};

BankAccount.prototype.withdrawMoney = function(money, info) {
  this.amount -= money;
  this.history = [...this.history, `${info}: -${money}`];
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
