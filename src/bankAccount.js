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

  addMoney(sum, reason) {
    this.amount += sum;

    return this.moneyHistory.push(`${reason}: ${sum}`);
  },

  withdrawMoney(sum, reason) {
    this.amount -= sum;

    return this.moneyHistory.push(`${reason}: -${sum}`);
  },
};

module.exports = BankAccount;
