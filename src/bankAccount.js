'use strict';

function BankAccount(name, money) {
  // Write your code here
  this.name = name;
  this.money = money;
  this.history = [`Initial: ${this.money}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.getAccountHistory = function() {
  return [...this.history];
};

BankAccount.prototype.addMoney = function(sum, name) {
  const arr = [this.history.push(`${name}: ${sum}`),
    this.money = this.money + sum];

  return [...arr];
};

BankAccount.prototype.withdrawMoney = function(sum, name) {
  const arr = [this.history.push(`${name}: -${sum}`),
    this.money = this.money - sum];

  return [...arr];
};

module.exports = BankAccount;
