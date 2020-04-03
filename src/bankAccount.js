'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(cash, goal) {
  this.amount += cash;
  this.goal = goal;
  this.history.push(`${this.goal}: ${cash}`);
};

BankAccount.prototype.withdrawMoney = function(cash, goal) {
  this.amount -= cash;
  this.goal = goal;
  this.history.push(`${this.goal}: -${cash}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
