'use strict';

function BankAccount(name, money) {
  this.name = name;
  this.money = money;
  this.transactions = [`Initial: ${this.money}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.addMoney = function(amount, transactionType) {
  this.money += amount;
  this.transactions.push(`${transactionType}: ${amount}`);
};

BankAccount.prototype.withdrawMoney = function(discount, transactionType) {
  this.money -= discount;
  this.transactions.push(`${transactionType}: -${discount}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.transactions;
};

module.exports = BankAccount;
