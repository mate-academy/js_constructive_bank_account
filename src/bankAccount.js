'use strict';

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(amount, description) {
  this.amount += amount;
  this.trnansaction.push(`${description}: ${amount}`);
};

BankAccount.prototype.withdrawMoney = function(amount, description) {
  this.amount -= amount;
  this.trnansaction.push(`${description}: -${amount}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.trnansaction;
};

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.trnansaction = [`Initial: ${this.amount}`];
};

module.exports = BankAccount;
