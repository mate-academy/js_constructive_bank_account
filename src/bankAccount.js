'use strict';

BankAccount.prototype = {
  getInfo: function() {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  },

  addMoney: function(addedMoney, info) {
    this.amount += addedMoney;
    this.transactions.push(`${info}: ${addedMoney}`);
  },

  withdrawMoney: function(wasSpending, info) {
    this.transactions.push(`${info}: -${wasSpending}`);
    this.amount -= wasSpending;
  },

  getAccountHistory: function() {
    return this.transactions;
  },
};

function BankAccount(name, amount) {
  this.name = name;
  this.birthDate = 'birthDate';
  this.amount = amount;
  this.transactions = [`Initial: ${amount}`];
}

module.exports = BankAccount;
