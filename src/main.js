'use strict';
function Person(name, dateOfBirth, amount) {
    this.name = name;
    this.dateOfBirth = dateOfBirth.split('.').reverse();
    this.amount = amount;

    let [year, month, day] = this.dateOfBirth;

    this.age = function getAge() {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();
        if (currentMonth < month || currentMonth === month && currentDay < day) {
            return currentYear - year + 1;
        }
        return currentYear - year;
    };

    this.currentAccount = this.amount;
    this.accountHistory = [{'initial': amount}];
    this.transaction = function(value, info) {
        this.accountHistory.push({[info]: value})
    }

}

Person.prototype.getInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age()}, Amount: ${this.amount}`)
};


Person.prototype.addMoney = function(income, info) {
    this.currentAccount += income;
    this.transaction(income, info)
};

Person.prototype.withdrawMoney = function(outgo, info) {
    this.currentAccount -= outgo;
    this.transaction(`-${outgo}`, info)
};

Person.prototype.getAccountHistory = function() {
    console.log(this.accountHistory);
};

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);
dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
