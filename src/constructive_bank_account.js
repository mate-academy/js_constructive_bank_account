'use strict'

function Person(name, dateOfBirth, initialAmount) {
    this.currentAmount = initialAmount;
    this.accountHistory = [
        { name: 'Initial', value: initialAmount }
    ];
    this.Name = name;
    this.Age = () => {
        const currentDate = new Date();
        let birthday = new Date(dateOfBirth.split('.').reverse().join('-'));
        var diff = currentDate.getTime() - birthday.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    };
    this.Amount = `${this.currentAmount}$`;
}

Person.prototype.pushHist = function(accountHistory, value, name) {
    accountHistory.push({ name, value });
};

Person.prototype.getInfo = function() {
    return `Name: ${this.Name}, Age: ${this.Age()}, Amount: ${this.Amount}`;
};

Person.prototype.addMoney = function(amount, info) {
    this.currentAmount += amount;
    this.Amount = `${this.currentAmount}$`;
    this.pushHist(this.accountHistory, amount, info);
    return `Current amount is ${this.currentAmount}$`;
};

Person.prototype.withdrawMoney = function(amount, info) {
    this.currentAmount -= amount;
    this.Amount = `${this.currentAmount}$`;
    this.pushHist(this.accountHistory, -amount, info);
    return `Current amount is ${this.currentAmount}`;
};

Person.prototype.getAccountHistory = function() {
    let shortHist = [];
    for (const obj of this.accountHistory) {
        shortHist.push(`${obj.name}: ${obj.value}`);
    }
    return shortHist;
};