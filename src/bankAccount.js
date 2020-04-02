'use strict';

function BankAccount(name, money, dateOfBirthday) {
  // Write your code here
  this.name = name;
  this.money = money;
  this.dateOfBirthday = dateOfBirthday;

  this.history = [`Initial: ${this.money}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.addMoney = function(money, profit) {
  this.money = this.money + money;
  this.history.push(`${profit}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, costs) {
  this.money = this.money - money;
  this.history.push(`${costs}: ${-money}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
