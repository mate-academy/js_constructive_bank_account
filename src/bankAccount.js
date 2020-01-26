'use strict';

BankAccount.prototype = {

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.money}$`;
  },

  addMoney(transactionSum, transactionInfo) {
    this.money += transactionSum;
    this.hist.push(`${transactionInfo}: ${transactionSum}`);

    return `Name: ${this.name}, Amount: ${this.money}$`;
  },

  getAccountHistory() {
    return this.hist;
  },

  withdrawMoney(transactionSum, transactionInfo) {
    this.money -= transactionSum;
    this.hist.push(`${transactionInfo}: -${transactionSum}`);

    return `Name: ${this.name}, Amount: ${this.money}$`;
  },
};

function BankAccount(name, money) {
  this.name = name;
  this.money = money;
  this.hist = [ `Initial: ${this.money}` ];
};

module.exports = BankAccount;
