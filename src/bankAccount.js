'use strict';

function BankAccount(name, income) {
  this.name = name;
  this.income = income;
  this.history = [`Initial: ${this.income}`];
}

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.income}$`;
  },

  addMoney(amount, operation) {
    this.income += amount;
    this.history.push(`${operation}: ${amount}`);
  },

  withdrawMoney(amount, operation) {
    this.income -= amount;
    this.history.push(`${operation}: ${-amount}`);
  },

  getAccountHistory() {
    return this.history;
  },

};

module.exports = BankAccount;
