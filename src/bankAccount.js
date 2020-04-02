'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(money, goal) {
  this.amount += money;
  this.goal = goal;
  this.history[this.history.length] = `${this.goal}: ${money}`;
};

BankAccount.prototype.withdrawMoney = function(money, goal) {
  this.amount -= money;
  this.goal = goal;
  this.history[this.history.length] = `${this.goal}: -${money}`;
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
