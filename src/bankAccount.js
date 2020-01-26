'use strict';

function BankAccount(name, amount, birthday) {
  this.name = name;
  this.birthday = birthday;
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(sum, transaction) {
  this.amount += sum;
  this.accountHistory.push(`${transaction}: ${sum}`);
};

BankAccount.prototype.withdrawMoney = function(sum, transaction) {
  this.amount -= sum;
  this.accountHistory.push(`${transaction}: -${sum}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.accountHistory;
};

module.exports = BankAccount;
