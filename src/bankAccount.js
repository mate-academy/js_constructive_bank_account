'use strict';

function BankAccount(name, money) {
  this.name = name;
  this.money = money;

  this.history = [`Initial: ${money}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.addMoney = function(amount, info) {
  this.money = this.money + amount;
  this.history.push(`${info}: ${amount}`);
};

BankAccount.prototype.withdrawMoney = function(amount, info) {
  this.money = this.money - amount;
  this.history.push(`${info}: -${amount}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
