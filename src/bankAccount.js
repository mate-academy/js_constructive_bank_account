'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.initialMoney = amount;
  this.birthDate = '01.01.1990';
  this.history = [`Initial: ${this.initialMoney}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.initialMoney}$`;
  },

  addMoney(amount, reason) {
    this.initialMoney += amount;
    this.reason = reason;
    this.history.push(`${this.reason}: ${amount}`);
  },

  withdrawMoney(amount, reason) {
    this.initialMoney -= amount;
    this.reason = reason;
    this.history.push(`${this.reason}: -${amount}`);
  },

  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
