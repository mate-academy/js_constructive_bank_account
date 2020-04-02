'use strict';

BankAccount.prototype = {
  getInfo: function () {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  },
  addMoney: function (transaction, purchase) {
    this.amount += transaction;
    this.purchase = purchase;
    this.history[this.history.length] = `${this.purchase}: ${transaction}`;
  },
  withdrawMoney: function (transaction, purchase) {
    this.amount -= transaction;
    this.purchase = purchase;
    this.history[this.history.length] = `${this.purchase}: -${transaction}`;
  },
  getAccountHistory: function () {
    return this.history;
  },
}

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${amount}`];
};

module.exports = BankAccount;
