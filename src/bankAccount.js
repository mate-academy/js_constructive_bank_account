'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.amountStory = [`Initial: ${this.amount}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(money, purpose) {
  this.amount += money;
  this.amountStory.push(`${purpose}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, purpose) {
  this.amount -= money;
  this.amountStory.push(`${purpose}: ${-money}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.amountStory;
};

module.exports = BankAccount;
