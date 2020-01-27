'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
};

BankAccount.prototype = {
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },
  addMoney(add, item) {
    this.amount += add;
    this.history.push(`${item}: ${add}`);

    return `A ${item} of ${add}$ was transfered to your account`;
  },
  withdrawMoney(withdraw, item) {
    this.amount -= withdraw;
    this.history.push(`${item}: -${withdraw}`);

    return `You paid ${withdraw}$ for ${item}`;
  },
  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
