'use strict';

function BankAccount(name, money, date) {
  this.name = name;
  this.date = date;
  this.money = money;

  this.transfers = [`Initial: ${money}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.addMoney = function(amount, creditingMoney) {
  this.money += amount;
  this.transfers.push(`${creditingMoney}: ${amount}`);
};

BankAccount.prototype.withdrawMoney = function(amount, expenseItem) {
  this.money -= amount;
  this.transfers.push(`${expenseItem}: -${amount}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.transfers;
};

module.exports = BankAccount;
