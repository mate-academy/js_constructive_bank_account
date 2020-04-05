'use strict';

function BankAccount(name, amount, dob) {
  this.name = name;
  this.amount = amount;
  this.dob = dob;
  this.transactionHistory = [`Initial: ${amount}`];
}

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.amount}$`;
};

BankAccount.prototype.addMoney = function(sum, transactionDescr) {
  this.amount += sum;
  this.transactionHistory.push(`${transactionDescr}: ${sum}`);
};

BankAccount.prototype.withdrawMoney = function(sum, transactionDescr) {
  this.amount -= sum;
  this.transactionHistory.push(`${transactionDescr}: -${sum}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.transactionHistory;
};

module.exports = BankAccount;
