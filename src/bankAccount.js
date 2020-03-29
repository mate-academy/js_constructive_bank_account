'use strict';

function BankAccount(name, amountOfMoney, dateOfBirth) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.amountOfMoney = amountOfMoney;
  this.accountHistory = [`Initial: ${amountOfMoney}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amountOfMoney}$`;
  },

  addMoney: function(sum, description) {
    this.amountOfMoney += sum;
    this.accountHistory.push(`${description}: ${sum}`);
  },

  withdrawMoney: function(sum, description) {
    this.amountOfMoney -= sum;
    this.accountHistory.push(`${description}: ${-sum}`);
  },

  getAccountHistory: function() {
    return this.accountHistory;
  },
};

module.exports = BankAccount;
