'use strict';

BankAccount.prototype = {
  getInfo() {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  },

  addMoney(transaction, info) {
    this.amount += transaction;
    this.transactions.push(`${info}: ${transaction}`);
  },

  withdrawMoney(transaction, info) {
    this.amount -= transaction;
    this.transactions.push(`${info}: -${transaction}`);
  },

  getAccountHistory() {
    return this.transactions;
  },
};

function BankAccount(name, amount, birthDate) {
  this.name = name;
  this.birthDate = birthDate;
  this.amount = amount;
  this.transactions = [`Initial: ${amount}`];
}

module.exports = BankAccount;
