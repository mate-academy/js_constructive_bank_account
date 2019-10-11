'use strict';

function calculateAge(dateOfBirth) {
    const reverseDate = new Date(dateOfBirth.split('.').reverse());
    const difference = Date.now() - reverseDate.getTime();
    const msAge = new Date(difference);
    return Math.abs(msAge.getFullYear() - 1970);
}

const Person = function(name, birthDay, amount) {
    this.name = name;
    this.birthDay = birthDay;
    this.amount = amount;
    this.history = [`Initia: ${amount}`];
}


Person.prototype.getInfo = function() {
    console.log(`Name: ${this.name}, 
                 Age: ${calculateAge(this.birthDay)}, 
                 Amount: ${this.amount}$`);
}

Person.prototype.addMoney = function (money, notes) {
    this.amount += money;
    this.history.push(`${notes}: ${money}`);
}

Person.prototype.withdrawMoney = function (money, notes) {
    this.amount -= money;
    this.history.push(`${notes}: -${money}`);
}

Person.prototype.getAccountHistory = function () {
    console.log(this.history);
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
