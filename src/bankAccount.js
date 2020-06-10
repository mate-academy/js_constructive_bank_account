'use strict';

function BankAccount(name, money) {
  this.name = name;
  this.amount = money;
  this.accountHistory = [`Initial: ${money}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney(money, event) {
    this.accountHistory.push(`${event}: ${money}`);
    this.amount += money;
  },

  withdrawMoney(money, event) {
    this.accountHistory.push(`${event}: -${money}`);
    this.amount -= money;
  },

  getAccountHistory() {
    return this.accountHistory;
  },
};

module.exports = BankAccount;
