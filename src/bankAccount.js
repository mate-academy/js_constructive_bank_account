'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(salary, operation) {
  this.amount += salary;
  this.accountHistory.push(`${operation}: ${salary}`);
};

BankAccount.prototype.withdrawMoney = function(minusMoney, operation) {
  this.amount -= minusMoney;
  this.accountHistory.push(`${operation}: -${minusMoney}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.accountHistory;
};

module.exports = BankAccount;
