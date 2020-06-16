'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = ['Initial: ' + amount];
};

BankAccount.prototype.getInfo = function() {
  return ('Name: ' + this.name + ', Amount: ' + this.amount + '$');
};

BankAccount.prototype.addMoney = function(money, key) {
  this.amount += money;
  this.history.push(key + ': ' + money);
};

BankAccount.prototype.withdrawMoney = function(money, key) {
  this.amount -= money;
  this.history.push(key + ': -' + money);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
