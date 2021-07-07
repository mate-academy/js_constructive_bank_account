'use strict';

const Person = function(name, birthDay, amount) {
    this.name = name;
    this.birthDay = birthDay;
    this.amount = amount;
    this.history = [{name: 'Initia', value: amount}];
}

Person.prototype._calculateAge = function(dateOfBirth) {
    const reverseDate = new Date(dateOfBirth.split('.').reverse());
    const difference = Date.now() - reverseDate.getTime();
    const msAge = new Date(difference);

    return Math.abs(msAge.getFullYear() - 1970);
}

Person.prototype.addItems = function(amount, notes) {
    this.amount += amount;
    this.history.push({name: notes, value: amount});
}

Person.prototype.getInfo = function() {
    return `Name: ${this.name}, 
            Age: ${this._calculateAge(this.birthDay)}, 
            Amount: ${this.amount}$`;
}

Person.prototype.addMoney = function (money, notes) {
    this.addItems(money, notes);
}

Person.prototype.withdrawMoney = function (money, notes) {
    this.addItems(-money, notes);
}

Person.prototype.getAccountHistory = function () {
    const historyArr = [];
    for (const key of this.history) {
        historyArr.push(`${key.name}: ${key.value}`);
    }

    return historyArr;
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
console.log(dmytro.addMoney(2000, 'salary'));
console.log(dmytro.withdrawMoney(500, 'new phone'));
console.log(dmytro.getInfo());
console.log(dmytro.withdrawMoney(500, 'apartment rent'));
console.log(dmytro.getInfo());
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']


console.log(pavel.getInfo()); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
