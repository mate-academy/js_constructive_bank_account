'use strict';

function BankAccount(name, money, birthDate) {
  this.name = name;
  this.birthDate = birthDate;
  this.moneyHist = [`Initial: ${money}`];
  this.money = money;
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.addMoney = function(extraMoney, infoTransaction) {
  this.money += extraMoney;
  this.moneyHist.push(`${infoTransaction}: ${extraMoney}`);
};

BankAccount.prototype.withdrawMoney = function(extraMoney, infoTransaction) {
  this.money -= extraMoney;
  this.moneyHist.push(`${infoTransaction}: -${extraMoney}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.moneyHist;
};

module.exports = BankAccount;
