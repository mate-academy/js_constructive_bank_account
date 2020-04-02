'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.transactions = [`Initial: ${amount}`];
}

BankAccount.prototype = {

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney(sum, transInfo) {
    this.amount = this.amount + sum;
    this.transactions.push(`${transInfo}: ${sum}`);
  },

  withdrawMoney(sum, transInfo) {
    this.amount = this.amount - sum;
    this.transactions.push(`${transInfo}: -${sum}`);
  },

  getAccountHistory() {
    return this.transactions;
  },
};

module.exports = BankAccount;
