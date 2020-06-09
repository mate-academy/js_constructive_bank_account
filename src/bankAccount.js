'use strict';

BankAccount.prototype.getInfo = function(sum, info) {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(sum, info) {
  this.accountHistory.push(`${info}: ${sum}`);
  this.amount += sum;
};

BankAccount.prototype.withdrawMoney = function(sum, info) {
  this.accountHistory.push(`${info}: -${sum}`);
  this.amount -= sum;
};

BankAccount.prototype.getAccountHistory = function() {
  return this.accountHistory;
};

function BankAccount(name = 'Vasja', amount = 0) {
  this.name = name;
  this.amount = 0;
  this.accountHistory = [];
  this.addMoney(amount, 'Initial');
};

module.exports = BankAccount;
