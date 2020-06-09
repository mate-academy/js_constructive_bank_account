'use strict';

BankAccount.prototype = {
  getInfo() {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  },

  addMoney(amount, description) {
    this.amount += amount;
    this.transactions.push(`${description}: ${amount}`);
  },

  withdrawMoney(amount, description) {
    this.amount -= amount;
    this.transactions.push(`${description}: -${amount}`);
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
