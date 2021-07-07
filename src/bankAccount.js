'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney(count, source) {
    this.history.push(`${source}: ${count}`);
    this.amount = this.amount + count;
  },

  withdrawMoney(count, target) {
    this.history.push(`${target}: -${count}`);
    this.amount = this.amount - count;
  },
  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
