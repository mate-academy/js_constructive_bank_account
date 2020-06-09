'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(amount, description) {
  this.amount += amount;
  this.accountHistory.push(`${description}: ${amount}`);
};

BankAccount.prototype.withdrawMoney = function(amount, description) {
  this.amount -= amount;
  this.accountHistory.push(`${description}: -${amount}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.accountHistory;
};

module.exports = BankAccount;
