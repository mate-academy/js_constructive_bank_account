'use strict';

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.addMoney = function(amount, description) {
  this.money += amount;
  this.history.push(`${description}: ${amount}`);

  return (`${this.money} ${description}`);
};

BankAccount.prototype.withdrawMoney = function(amount, description) {
  this.money -= amount;
  this.history.push(`${description}: -${amount}`);

  return (`${this.money} ${description}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

function BankAccount(name, money) {
  this.name = name;
  this.money = money;
  this.history = [`Initial: ${this.money}`];
};

module.exports = BankAccount;
