'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.transactions = [`Initial: ${amount}`];
}

const methods = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(cash, transaction) {
    this.amount += cash;
    this.transactions.push(`${transaction}: ${cash}`);
  },

  withdrawMoney: function(cash, transaction) {
    this.amount -= cash;
    this.transactions.push(`${transaction}: -${cash}`);
  },

  getAccountHistory: function() {
    return this.transactions;
  },
};

BankAccount.prototype = methods;

module.exports = BankAccount;
