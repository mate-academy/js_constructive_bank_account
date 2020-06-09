'use strict';

function BankAccount(name, money) {
  this.clientName = name;
  this.amount = money;
  this.moneyHistory = [`Initial: ${money}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.clientName}, Amount: ${this.amount}$`;
  },

  getAccountHistory() {
    return this.moneyHistory;
  },

  addMoney(sum, operation) {
    this.amount += sum;

    return this.moneyHistory.push(`${operation}: ${sum}`);
  },

  withdrawMoney(sum, operation) {
    this.amount -= sum;

    return this.moneyHistory.push(`${operation}: -${sum}`);
  },
};

module.exports = BankAccount;
