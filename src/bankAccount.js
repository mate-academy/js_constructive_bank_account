'use strict';

/*
- The person has the following initial info:
 name, date of birth in string format, initial amount of money.
- We can do the following options with person:

    `getInfo` - print into console info about the current person

    `addMoney` - plus money to his bank account and some info about transaction

    `withdrawMoney` - minus money from his account
    and some info about transaction

    `getAccountHistory` - print into console the history of managing his account

- Use `this` to describe these methods.
```js
const dmytro = new Person('Dmytro', 1000);
const pavel = new Person('Pavel', 400);

dmytro.getInfo(); // print `Name: Dmytro, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory();
// [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Amount: 400$
*/

function BankAccount(name, amount) {
  // Write your code here
  this.name = name;
  this.amount = amount;
  this.history = [`Initial: ${this.amount}`];
};

BankAccount.prototype = {
  getInfo: function() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  },

  addMoney: function(money, info) {
    this[info] = money;
    this.history.push(`${info}: ${money}`);
    this.amount += money;
  },

  withdrawMoney: function(money, info) {
    this[info] = money;
    this.amount -= money;
    this.history.push(`${info}: -${money}`);
  },

  getAccountHistory: function() {
    return this.history;
  },
};

module.exports = BankAccount;
