'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(money, source) {
  this.amount += money;
  this.source = source;
  this.history.push(`${this.source}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, product) {
  this.amount -= money;
  this.product = product;
  this.history.push(`${this.product}: -${money}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
