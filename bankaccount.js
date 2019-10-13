'use strict'

function Person(name = anonymous, dateOfBirth, amount = 0) {
    this.__proto__ = Person.prototype;

    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.amount = amount;

    const [day, month, year] = dateOfBirth.split('.');
    this.day = +day;
    this.month = +month;
    this.year = +year;
    this.log = [{ transaction: 'Initial', amount: this.amount }];
}

Person.prototype = {

    _getAge: function getAge() {
        const yearNow = new Date().getFullYear();
        const monthNow = new Date().getMonth() + 1;
        const dayNow = new Date().getDate();
        let result = yearNow - this.year;
        if (monthNow === this.month && dayNow < this.day || monthNow < this.month) {
            return result - 1;
        }

        return result;
    },

    getInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this._getAge()}, Amount: ${this.amount}\$`)
    },

    _transactions: function(info, money) {
        this.amount += money;
        this.log.push({ transaction: info, amount: money });
    },

    addMoney: function(money, info) {
        this._transactions(info, money);
    },

    withdrawMoney: function(money, info) {
        this._transactions(info, -money);
    },

    getAccountHistory: function() {

        const result = [];
        for (const value of this.log) {
            result.push(`${value.transaction}: ${value.amount}`);
        }

        return result;
    }
};
