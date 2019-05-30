'use strict';

function PersonAccount(personName, personBirthDate, personMoneyAmount) {
  this.personName = personName;
  this.personBirthDate = personBirthDate;
  this.personMoneyAmount = personMoneyAmount;
  this.accountHistory = [`Initial: ${this.personMoneyAmount}`];

  this.getPersonAge = function () {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const personBornYear = this.personBirthDate.slice(-4);
    const personAge = yearNow - personBornYear;
    return personAge;
  }

  this.getInfo = function () {
    const personAge = this.getPersonAge();
    console.log(`Name: ${this.personName}, Age: ${personAge}, Amount: ${this.personMoneyAmount}$`);
  }

  this.addMoney = function (sum, info) {
    this.personMoneyAmount += sum;
    this.saveAccountHistory(sum, info);
  }

  this.withdrawMoney = function (sum, info) {
    this.personMoneyAmount -= sum;
    this.saveAccountHistory(`-${sum}`, info);
  }

  this.getAccountHistory = function () {
    console.log(this.accountHistory);
  }

  this.saveAccountHistory = function (sum, info) {
    const userAction = `${info}: ${sum}`;
    this.accountHistory.push(userAction);
  }
}
