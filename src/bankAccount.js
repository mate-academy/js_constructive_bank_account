'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.acountHistory = [`Initial: ${this.amount}`];
};

BankAccount.prototype.addMoney = function(modey, description) {
  this.acountHistory.push(`${description}: ${modey}`);
  this.amount += modey;
};

BankAccount.prototype.withdrawMoney = function(modey, description) {
  this.acountHistory.push(`${description}: -${modey}`);
  this.amount -= modey;
};

BankAccount.prototype.getAccountHistory = function() {
  return this.acountHistory;
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

module.exports = BankAccount;
