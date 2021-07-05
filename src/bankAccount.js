'use strict';

function BankAccount(name, initialAmountOfMoney) {
  this.name = name;
  this.AmountOfMoney = initialAmountOfMoney;
  this.history = [`Initial: ${initialAmountOfMoney}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.AmountOfMoney}$`;
};

BankAccount.prototype.addMoney = function(sum, info) {
  this.AmountOfMoney += sum;
  this.history.push(`${info}: ${sum}`);
};

BankAccount.prototype.withdrawMoney = function(sum, info) {
  this.AmountOfMoney -= sum;
  this.history.push(`${info}: -${sum}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
