'use strict';

function BankAccount(name, initial) {
  this.name = name;
  this.initial = initial;

  const history = [`Initial: ${initial}`];

  this.history = history;
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.initial}$`;
};

BankAccount.prototype.addMoney = function(amount, info) {
  this.initial = this.initial + amount;
  this.history.push(`${info}: ${amount}`);
};

BankAccount.prototype.withdrawMoney = function(amount, info) {
  this.initial = this.initial - amount;
  this.history.push(`${info}: -${amount}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
