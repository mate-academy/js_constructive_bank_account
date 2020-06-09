'use strict';

function BankAccount(name, sum, birthDate) {
  const regexp = /^([0-2]\d|3[0,1])\.(0\d|1[0-2])\.(\d{2})$/;

  this.name = name;
  this.money = sum;

  this.date = birthDate && birthDate.match(regexp)
    ? birthDate.match(regexp)[0]
    : undefined;
  this.history = [`Initial: ${sum}`];
};

BankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Amount: ${this.money}$`
  + (this.date ? `, Date of birthday: ${this.date}` : '');
};

BankAccount.prototype.addMoney = function(sum, description) {
  this.money += sum;
  this.history.push(`${description}: ${sum}`);
};

BankAccount.prototype.withdrawMoney = function(sum, description) {
  this.money -= sum;
  this.history.push(`${description}: -${sum}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
