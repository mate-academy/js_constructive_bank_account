'use strict';

function BankAccount(name, amount) {
  // Write your code here
  this.name = name;
  this.amount = amount;
  this.transactions = [`Initial: ${amount}`];
}

BankAccount.prototype = {
  constructor: BankAccount,
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney(money, transaction) {
    this.amount += money;
    this.transactions.push(`${transaction}: ${money}`);
  },
  withdrawMoney(money, transaction) {
    this.amount -= money;
    this.transactions.push(`${transaction}: -${money}`);
  },
  getAccountHistory() {
    return this.transactions;
  },
};

module.exports = BankAccount;
