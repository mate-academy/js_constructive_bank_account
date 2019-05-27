'use strict';


function Person(name, birthDate, amount) {
  this.name = name;
  this.initialAmount = amount;
  this.amount = amount;
  this.birthDate = birthDate;
  this.buys = [];
}

Person.prototype = {
  age: function() {
    const birth = this.birthDate.split('.').reverse();
    const dateofBirth = new Date(birth);
    const ageDifMs = Date.now() - dateofBirth.getTime();
    const ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },

  addMoney: function(salary) {
    this.amount += salary;
  },

  withdrawMoney: function(spendMoney, reason) {
    this.amount -= spendMoney;
    this.buys.push(` ${reason}: ${-spendMoney}`);
  },

  getInfo: function() {
    console.log(`Name: ${this.name}, Age: ${this.age()}, Amount: ${this.amount}$`);  
  },

  getAccountHistory: function() {
    console.log(`Initial: ${this.initialAmount}, salary: ${this.amount},${this.buys}`);
    
  }
}
