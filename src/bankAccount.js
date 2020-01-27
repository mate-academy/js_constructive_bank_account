'use strict';

function BankAccount(name, money) {
  this.name = name;
  this.money = money;
  this.history = [];
  this.history.push(`Initial: ${this.money}`);
}

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.money}$`;
  },

  addMoney: function(money, description) {
    this.money += money;
    this.history.push(`${description}: ${money}`);
  },

  withdrawMoney: function(money, description) {
    this.money -= money;
    this.history.push(`${description}: -${money}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
