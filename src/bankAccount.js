'use strict';

function BankAccount(name, income) {
  this.name = name;
  this.income = income;
  this.history = [`Initial: ${income}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.income}$`;
};

BankAccount.prototype.addMoney = function(value, description) {
  this.income += value;
  this.history.push(`${description}: ${value}`);
};

BankAccount.prototype.withdrawMoney = function(value, description) {
  this.income -= value;
  this.history.push(`${description}: -${value}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
