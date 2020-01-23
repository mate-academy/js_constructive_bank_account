'use strict';

function calculateAge(birthDay, birthMonth, birthYear) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    var calculatedAge = currentYear - birthYear;

    if (currentMonth < birthMonth - 1) {
        calculatedAge--;
    }
    if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
        calculatedAge--;
    }
    return calculatedAge;
}

function format(str) {
    str = str.split('-');
    for (let i = 0; i < str.length; i++) {
        str[i] = +str[i]
    }
    return str;
}

Person.prototype = {
    getInfo: function () {
        return (this.name + ' ' + 'is ' + calculateAge.apply(null, format(`${this.dateOfBirth}`)) + ' years old, and has a balance of ' + this.iniAmount + '$');
    },
    addMoney: function (amount, salary) {
        this.amount = amount;
        return this.name + ' has a plus of ' + amount + '$ to his account and now his balance is ' + `${this.iniAmount += amount}` + '$';
    },
    withdrawMoney: function (minus, item) {
        this.item = item;
        this.minus = minus;
        return this.name + ' spent ' + minus + '$ on ' + item + ' and now his balance is ' + `${this.iniAmount -= minus}` + '$'
    },
    getAccountHistory: function () {
        // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']
        let arr = [];
        arr.push(`Initial: ${this.iniAmount}, salary: ${this.amount}$, ${this.item}: -${this.minus}, apartment rent: -${this.minus}`);
        return arr;
    }

};


function Person(name, dateOfBirth, iniAmount) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.iniAmount = iniAmount;
};
const Petya = new Person('Petya', '16-09-1988', 2000);
console.log(Petya.getInfo());
console.log(Petya.addMoney(2000, 'salary'));
console.log(Petya.withdrawMoney(500, 'cloths'));
console.log(Petya.getInfo());
console.log(Petya.getAccountHistory());
