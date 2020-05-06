'use strict';

function BankAccount(name, amount) {
  // Write your code here
  this.personName = '' + name;
  this.personMoney = amount;
  this.history = [`Initial: ${amount}`];

  BankAccount.prototype.getInfo = function() {
    return `Name: ${this.personName}, Amount: ${this.personMoney}$`;
  };

  BankAccount.prototype.addMoney = function(value, reason) {
    this.personMoney += value;
    this.history.push(`${reason}: ${value}`);
  };

  BankAccount.prototype.withdrawMoney = function(value, reason) {
    this.personMoney -= value;
    this.history.push(`${reason}: -${value}`);
  };

  BankAccount.prototype.getAccountHistory = function() {
    return this.history;
  };
};

module.exports = BankAccount;
