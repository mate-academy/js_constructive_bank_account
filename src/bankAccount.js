'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  },

  addMoney: function(addMoney, addTransaction) {
    this.amount += addMoney;
    this.history.push(`${addTransaction}: ${addMoney}`);
  },

  withdrawMoney: function(minusMoney,
    addMinusTransaction) {
    this.amount -= minusMoney;
    this.history.push(`${addMinusTransaction}: -${minusMoney}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
