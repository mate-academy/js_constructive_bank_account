'use strict';

function BankAccount(name, amountMoney, birthday) {
  this.name = name;
  this.amountMoney = amountMoney;
  this.birthday = birthday;
  this.history = [`Initial: ${amountMoney}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amountMoney}$`;
  },
  addMoney: function(value, info) {
    this.amountMoney += value;
    this.history.push(`${info}: ${value}`);
  },
  withdrawMoney: function(value, info) {
    this.amountMoney -= value;
    this.history.push(`${info}: -${value}`);
  },
  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
