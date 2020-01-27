'use strict';

function BankAccount(name, startMoney) {
  this.name = name;
  this.money = startMoney;
  this.history = [`Initial: ${startMoney}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return (`Name: ${this.name}, Amount: ${this.money}$`);
  },
  addMoney: function(value, purpose) {
    this.money += value;
    this.history.push(`${purpose}: ${value}`);
  },
  withdrawMoney: function(value, purpose) {
    this.money -= value;
    this.history.push(`${purpose}: -${value}`);
  },
  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
