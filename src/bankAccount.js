'use strict';

BankAccount.prototype = {
  get amount() {
    return Object.values(this.history)
      .reduce((sum, current) => sum + current);
  },
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney(value, valueName) {
    this.history[valueName] = value;
  },
  withdrawMoney(value, valueName) {
    this.history[valueName] = -value;
  },
  getAccountHistory() {
    return Object.entries(this.history)
      .map(entry => entry.join(': '));
  },
};

function BankAccount(name, initial) {
  this.name = name;

  this.history = {
    'Initial': initial,
  };
};

module.exports = BankAccount;
