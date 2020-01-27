'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(sum, comment) {
  this.history = [...this.comment, `${comment}: ${sum}`];
  this.amount = this.amount + sum;
};

BankAccount.prototype.addMoney = function(sum, comment) {
  this.history = [...this.history, `${comment}: ${sum}`];
  this.amount = this.amount + sum;
};

BankAccount.prototype.withdrawMoney = function(sum, comment) {
  this.history = [...this.history, `${comment}: -${sum}`];
  this.amount = this.amount - sum;
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
