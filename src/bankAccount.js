'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.hist = [`Initial: ${amount}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(income, source) {
  this.amount += income;
  this.hist.push(`${source}: ${income}`);
};

BankAccount.prototype.withdrawMoney = function(outcome, source) {
  this.amount -= outcome;
  this.hist.push(`${source}: -${outcome}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.hist;
};

module.exports = BankAccount;
