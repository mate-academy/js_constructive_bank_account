'use strict';

BankAccount.prototype.getInfo = function() {
  return (`Name: ${this.name}, Amount: ${this.amountOfMoney}$`);
};

BankAccount.prototype.addMoney = function(money, transactionInfo) {
  this.amountOfMoney += money;
  this.history.push(`${transactionInfo}: ${money}`);
};

BankAccount.prototype.withdrawMoney = function(money, transactionInfo) {
  this.amountOfMoney -= money;
  this.history.push(`${transactionInfo}: -${money}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

function BankAccount(name, amountOfMoney) {
  this.name = name;
  this.amountOfMoney = amountOfMoney;
  this.history = [`Initial: ${amountOfMoney}`];
};

module.exports = BankAccount;
