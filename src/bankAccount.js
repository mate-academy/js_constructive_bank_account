'use strict';

function BankAccount() {
  const args = [...arguments];

  this.name = args[0];
  this.salary = args[1];
  this.history = [`Initial: ${this.salary}`];

  BankAccount.prototype.getInfo = function() {
    return `Name: ${this.name}, Amount: ${this.salary}$`;
  };

  BankAccount.prototype.addMoney = function(money, info) {
    this.history.push(`${info}: ${money}`);
    this.salary += money;
  };

  BankAccount.prototype.withdrawMoney = function(money, info) {
    this.history.push(`${info}: -${money}`);
    this.salary -= money;
  };

  BankAccount.prototype.getAccountHistory = function() {
    return this.history;
  };
};
module.exports = BankAccount;
