'use strict';

function Person(name, dateOfBirth, amount) {
    this.name = name;
    this.dateOfBirth = dateOfBirth.split('.').reverse();
    this.amount = amount;
    this.currentAmount = this.amount;
    let [year, month, day] = this.dateOfBirth;
    this.accountHistory = [{'Initial': amount}];

    this.operations = function (value, str) {
        this.accountHistory.push({[str] : value})
    }

    this.age = function getAge() {
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth() + 1;
        let currentDay = new Date().getDate();
        if (currentMonth < month || currentMonth === month && currentDay < day ) {
            return (currentYear - year - 1);
        }
        return currentYear - year;
    }

};

Person.prototype.getInfo = function() {
    console.log(`${this.name} ${this.age()} ${this.currentAmount}`);
};

Person.prototype.addMoney = function(value, str) {
    this.currentAmount += value;
    this.operations(value, str);
}
Person.prototype.getAccountHistory = function(){
    console.log(this.accountHistory);
}
Person.prototype.withdrawMoney = function(value, str){
    this.currentAmount -= value;
    this.operations(-value, str);
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