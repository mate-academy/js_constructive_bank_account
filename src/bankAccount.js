'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.historyOfAccount = [`Initial: ${amount}`];
}

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney: function(money, addMoneyInfo) {
    this.amount += money;
    this.historyOfAccount.push(`${addMoneyInfo}: ${money}`);
  },
  withdrawMoney: function(money, spendMoneyInfo) {
    this.amount += -money;
    this.historyOfAccount.push(`${spendMoneyInfo}: -${money}`);
  },
  getAccountHistory: function() {
    return this.historyOfAccount;
  },

};

module.exports = BankAccount;
