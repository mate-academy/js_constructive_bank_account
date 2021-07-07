'use strict';

function BankAccount(name, money) {
  this.name = name;
  this.money = money;
  this.history = [`Initial: ${money}`];
};

BankAccount.prototype.addMoney = function(amount, description) {
  this.money += amount;
  this.history.push(`${description}: ${amount}`);
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.withdrawMoney = function(amount, description) {
  this.money -= amount;
  this.history.push(`${description}: -${amount}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
