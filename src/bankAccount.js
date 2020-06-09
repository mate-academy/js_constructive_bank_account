'use strict';

function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
  this.accountHistory = [`Initial: ${this.amount}`];

  BankAccount.prototype.getInfo = () => {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  };

  BankAccount.prototype.addMoney = (plusAmount, info) => {
    this.amount += plusAmount;

    this.accountHistory.push(`${info}: ${plusAmount}`);
  };

  BankAccount.prototype.withdrawMoney = (minusAmount, info) => {
    this.amount -= minusAmount;

    this.accountHistory.push(`${info}: -${minusAmount}`);
  };

  BankAccount.prototype.getAccountHistory = () => {
    return this.accountHistory;
  };
};

module.exports = BankAccount;
