'use strict';

const Person = function(name, date, amount) {
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.age = this.getAge(date);
    this.history = [{ Initial: this.amount }];
};

Person.prototype.getAge = function(dateOfBirth) {
    const dateArr = dateOfBirth.split('.');
    const year = dateArr[2];
    const month = dateArr[1];
    const day = dateArr[0];
    const yearNow = new Date().getFullYear();
    const monthNow = new Date().getMonth() + 1;
    const dayNow = new Date().getDate();
    return (monthNow === month && dayNow < day || monthNow < month) ?
        yearNow - year - 1 : yearNow - year;
};


Person.prototype.getInfo = function() {
    console.log(
        `Person name: ${this.name}, age: ${this.age}, money amount: ${this.amount}$`
    );
};

Person.prototype.amountChange = function(amount, operationInfo) {
    this.amount += amount;
    this.history.push({ [operationInfo]: amount });
};

Person.prototype.addMoney = function(amount, operationInfo) {
    this.amountChange(amount, operationInfo);
};

Person.prototype.withdrawMoney = function(amount, operationInfo) {
    this.amountChange(-amount, operationInfo);
};

Person.prototype.getAccountHistory = function() {
    const history = [];

    for (let key of this.history) {
        for (let operation in key) {
            history.push(`${operation}: ${key[operation]}`);
        };
    };

    console.log(history);
};