'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.res = [`Initial: ${amount}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(money, res) {
  this.amount += money;
  this.res.push(`${res}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, res) {
  this.amount -= money;
  this.res.push(`${res}: -${money}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.res;
};

module.exports = BankAccount;
