'use strict';

function Person(name, dateOfBirth, initialMoney) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.currentMoney = initialMoney;
  this.accountHistory = [`Initial: ${this.currentMoney}`];
  this.getInfo = () => {
    console.log(this.name + ', ' + this.dateOfBirth + ', ' + this.currentMoney + '$');
  }
  this.addMoney = (amount, source) => {
    this.currentMoney += amount;
    this.accountHistory.push(`${source}: ${amount}`)
  }
  this.withdrawMoney = (amount, source) => {
    this.currentMoney -= amount;
    this.accountHistory.push(`${source}: ${amount}`);
  }
  this.getAccountHistory = () => {
    console.log(this.accountHistory);
  }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$