'use strict';

function BankAccount(name, initialValue, dateOfBirth) {
  this.name = name;
  this.birth = `${dateOfBirth}`;
  this.amount = initialValue;
  this.history = [`Initial: ${initialValue}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(value, source) {
  this.amount += value;
  this.history.push(`${source}: ${value}`);
};

BankAccount.prototype.withdrawMoney = function(value, purpose) {
  this.amount -= value;
  this.history.push(`${purpose}: -${value}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
