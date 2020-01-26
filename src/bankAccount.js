'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(salary) {
  this.amount += salary;

  return this.accountHistory.push(`salary: ${salary}`);
};

BankAccount.prototype.withdrawMoney = function(expense, itemName) {
  this.amount -= expense;

  return this.accountHistory.push(`${itemName}: -${expense}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.accountHistory;
};

module.exports = BankAccount;
