'use strict';

function BankAccount(name, amount, birthDate) {
  this.name = name;
  this.money = amount;
  this.birthDate = birthDate;
  this.history = [`Initial: ${amount}`];
};

BankAccount.prototype.getInfo = function() {
  const validatedBirthDate = this.birthDate
    ? `, Date of birthday: ${this.date}` : '';

  return `Name: ${this.name}, Amount: ${this.money}$` + validatedBirthDate;
};

BankAccount.prototype.addMoney = function(amount, description) {
  this.money += amount;
  this.history.push(`${description}: ${amount}`);
};

BankAccount.prototype.withdrawMoney = function(amount, description) {
  this.money -= amount;
  this.history.push(`${description}: -${amount}`);
};

BankAccount.prototype.getAccountHistory = function() {
  return this.history;
};

module.exports = BankAccount;
