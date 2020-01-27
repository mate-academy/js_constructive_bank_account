'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.initialMoney = amount;
  this.history = [`Initial: ${this.initialMoney}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.initialMoney}$`;
  },

  addMoney(amount, reason) {
    this.initialMoney += amount;
    this.history.push(`${reason}: ${amount}`);
  },

  withdrawMoney(amount, reason) {
    this.initialMoney -= amount;
    this.history.push(`${reason}: -${amount}`);
  },

  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
