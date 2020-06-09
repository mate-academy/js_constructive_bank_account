'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(amountAdded, transactionPurpose) {
    this.amount += amountAdded;
    this.accountHistory.push(`${transactionPurpose}: ${amountAdded}`);
  },

  withdrawMoney: function(amountWithdrawn, transactionPurpose) {
    this.amount -= amountWithdrawn;
    this.accountHistory.push(`${transactionPurpose}: -${amountWithdrawn}`);
  },

  getAccountHistory: function() {
    return this.accountHistory;
  },
};

module.exports = BankAccount;
