'use strict';

function BankAccount(name, amount) {
  this.history = ['Initial: ' + amount];
  this.name = name;
  this.amount = amount;
};

BankAccount.prototype = {
  getAccountHistory: function() {
    return this.history;
  },

  getInfo: function() {
    const name = this.name;
    const amount = this.amount;
    const result = `Name: ${name}, Amount: ${amount}$`;

    return result;
  },

  addMoney: function(amount, desc) {
    this.amount += amount;
    this.history.push(`${desc}: ${amount}`);
  },
  withdrawMoney: function(amount, desc) {
    this.amount -= amount;
    this.history.push(`${desc}: -${amount}`);
  },
};
module.exports = BankAccount;
