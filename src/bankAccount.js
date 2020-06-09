'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  },

  addMoney: function(plusAmount, info) {
    this.amount += plusAmount;

    this.accountHistory.push(`${info}: ${plusAmount}`);
  },

  withdrawMoney: function(minusAmount, info) {
    this.amount -= minusAmount;

    this.accountHistory.push(`${info}: -${minusAmount}`);
  },

  getAccountHistory: function() {
    return this.accountHistory;
  },
};

module.exports = BankAccount;
