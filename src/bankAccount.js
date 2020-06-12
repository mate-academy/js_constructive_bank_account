'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.history = ['Initial: ' + amount];
}

BankAccount.prototype = {
  getInfo() {
    return ('Name: ' + this.name + ', Amount: ' + this.amount + '$');
  },

  addMoney(money, key) {
    this.amount += money;
    this.history.push(key + ': ' + money);
  },

  withdrawMoney(money, key) {
    this.amount -= money;
    this.history.push(key + ': -' + money);
  },

  getAccountHistory() {
    return this.history;
  },
};

module.exports = BankAccount;
