'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(sum, desc) {
    this.amount += sum;
    this.history.push(`${desc}: ${sum}`);
  },

  withdrawMoney: function(sum, desc) {
    this.amount -= sum;
    this.history.push(`${desc}: ${-sum}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
