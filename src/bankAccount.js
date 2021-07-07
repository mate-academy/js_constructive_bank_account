'use strict';

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(amount, source) {
  this.amount += amount;
  this.history.push(`${source}: ${amount}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

BankAccount.prototype.withdrawMoney = function(amount, purpose) {
  this.amount -= amount;
  this.history.push(`${purpose}: -${amount}`);
};

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
};

module.exports = BankAccount;
