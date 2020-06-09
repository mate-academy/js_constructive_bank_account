'use strict';

BankAccount.prototype = {
  get amount() {
    const values = Object.values(this.history);

    return values.reduce((sum, current) => sum + current);
  },
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney(value, operation) {
    this.history[operation] = value;
  },
  withdrawMoney(value, operation) {
    this.history[operation] = -value;
  },
  getAccountHistory() {
    const entries = Object.entries(this.history);

    return entries.map(entry => entry.join(': '));
  },
};

function BankAccount(name, initial) {
  this.name = name;

  this.history = {
    'Initial': initial,
  };
};

module.exports = BankAccount;
