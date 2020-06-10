'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney(amount, transaction) {
    this.amount += amount;
    this.accountHistory.push(`${transaction}: ${amount}`);
  },
  withdrawMoney(amount, transaction) {
    this.amount -= amount;
    this.accountHistory.push(`${transaction}: -${amount}`);
  },
  getAccountHistory() {
    return this.accountHistory;
  },
};

module.exports = BankAccount;
