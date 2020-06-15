'use strict';

function BankAccount(name, initial) {
  this.name = name;
  this.amount = initial;
  this.history = [`Initial: ${this.amount}`];
}

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney(amount, profits) {
    this.amount += amount;
    this.history.push(`${profits}: ${amount}`);
  },

  withdrawMoney(amount, spending) {
    this.amount -= amount;
    this.history.push(`${spending}: -${amount}`);
  },

  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
