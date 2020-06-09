'use strict';

function BankAccount(name, money) {
  this.Name = name;
  this.Amount = money;
  this.moneyHistory = [`Initial: ${money}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.Name}, Amount: ${this.Amount}$`;
};

BankAccount.prototype.getAccountHistory = function() {
  return this.moneyHistory;
};

BankAccount.prototype.addMoney = function(sum, reason) {
  this.Amount += sum;

  return this.moneyHistory.push(`${reason}: ${sum}`);
};

BankAccount.prototype.withdrawMoney = function(sum, reason) {
  this.Amount -= sum;

  return this.moneyHistory.push(`${reason}: -${sum}`);
};

module.exports = BankAccount;
