'use strict';

const BankAccount = function(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${amount}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.getAccountHistory = function() {
  return this.accountHistory;
};

BankAccount.prototype.addMoney = function(amount, info) {
  this.amount += amount;
  this.accountHistory.push(`${info}: ${amount}`);
};

BankAccount.prototype.withdrawMoney = function(amount, info) {
  this.amount -= amount;
  this.accountHistory.push(`${info}: -${amount}`);
};

module.exports = BankAccount;
