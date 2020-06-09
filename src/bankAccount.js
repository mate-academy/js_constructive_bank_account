'use strict';

BankAccount.prototype = {
  getInfo() {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  },

  addMoney(description, info) {
    this.amount += description;
    this.transactions.push(`${info}: ${description}`);
  },

  withdrawMoney(description, info) {
    this.amount -= description;
    this.transactions.push(`${info}: -${description}`);
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
