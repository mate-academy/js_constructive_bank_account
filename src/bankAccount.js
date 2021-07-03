'use strict';

function BankAccount(name, money) {
  this.name = name;
  this.money = money;
  this.moneyReport = [`Initial: ${money}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`;
};

BankAccount.prototype.addMoney = function(additionalRevenue, infoRevenue) {
  this.moneyReport.push(`${infoRevenue}: ${additionalRevenue}`);
  this.money += additionalRevenue;
};

BankAccount.prototype.withdrawMoney = function(additionalDispend, infoDispend) {
  this.moneyReport.push(`${infoDispend}: -${additionalDispend}`);
  this.money -= additionalDispend;
};

BankAccount.prototype.getAccountHistory = function() {
  return this.moneyReport;
};

module.exports = BankAccount;
