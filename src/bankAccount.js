'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = ['Initial: ' + this.amount];
}

BankAccount.prototype.getInfo = function() {
  return (`Name: ${this.name}, Amount: ${this.amount}$`);
};

BankAccount.prototype.addMoney = function(income, from) {
  this.amount += income;
  this.history.push(from + ': ' + income);
};

BankAccount.prototype.withdrawMoney = function(spend, item) {
  this.amount -= spend;
  this.history.push(item + ': ' + '-' + spend);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
