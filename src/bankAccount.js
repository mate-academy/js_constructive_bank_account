'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;

  this.history = ['Initial: ' + this.amount];

  BankAccount.prototype.getInfo = function() {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  };

  BankAccount.prototype.addMoney = function(addMoney, addTransaction) {
    this.amount += addMoney;
    this.history.push(addTransaction + ': ' + addMoney);
  };

  BankAccount.prototype.withdrawMoney = function(minusMoney,
    addMinusTransaction) {
    this.amount -= minusMoney;
    this.history.push(addMinusTransaction + ': -' + minusMoney);
  };

  BankAccount.prototype.getAccountHistory = function() {
    return this.history;
  };
};

module.exports = BankAccount;
