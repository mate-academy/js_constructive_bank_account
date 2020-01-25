'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.information = [`Initial: ${amount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney: function(amount, info) {
    this.amount += amount;
    this.information.push(`${info}: ${amount}`);
  },
  withdrawMoney: function(amount, info) {
    this.amount -= amount;
    this.information.push(`${info}: -${amount}`);
  },
  getAccountHistory: function() {
    return this.information;
  },
};

module.exports = BankAccount;
