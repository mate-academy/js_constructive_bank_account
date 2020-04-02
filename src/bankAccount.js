'use strict';

function BankAccount(name, initialValue) {
  this.clientName = name;
  this.currentValue = initialValue;
  this.history = [`Initial: ${this.currentValue}`];
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

BankAccount.prototype.getInfo = function() {
  return (`Name: ${this.clientName}, Amount: ${this.currentValue}$`);
};

BankAccount.prototype.addMoney = function(money, coment) {
  this.currentValue += money;
  this.history.push(`${coment}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, coment) {
  this.currentValue -= money;
  this.history.push(`${coment}: -${money}`);
};

module.exports = BankAccount;
