'use strict';

const operations = {
  getInfo() {
    return (`Name: ${this.name}, Amount: ${this.amountOfMoney}$`);
  },

  addMoney(money, transactionInfo) {
    this.amountOfMoney += money;
    this.history.push(`${transactionInfo}: ${money}`);
  },

  withdrawMoney(money, transactionInfo) {
    this.amountOfMoney -= money;
    this.history.push(`${transactionInfo}: -${money}`);
  },

  getAccountHistory() {
    return this.history;
  },
};

BankAccount.prototype = operations;

function BankAccount(name, amountOfMoney) {
  this.name = name;
  this.amountOfMoney = amountOfMoney;
  this.history = [`Initial: ${amountOfMoney}`];
};

module.exports = BankAccount;
