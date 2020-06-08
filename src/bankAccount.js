'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];
};

BankAccount.prototype.getInfo = function() {
  return (`Name: ${this.name}, Amount: ${this.amount}$`);
};

BankAccount.prototype.addMoney = function(sum, description) {
  this.amount += sum;

  this.accountHistory.push(`${description}: ${sum}`);
};

BankAccount.prototype.withdrawMoney = function(sum, description) {
  this.amount -= sum;

  this.accountHistory.push(`${description}: -${sum}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return (this.accountHistory);
};

module.exports = BankAccount;
