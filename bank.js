'use strict';
function calculateAge(birthday) { // birthday is a date
   const ageDifMs = Date.now() - Date.parse(birthday);
   const ageDate = new Date(ageDifMs); // miliseconds from epoch
   return Math.abs(ageDate.getUTCFullYear() - 1970);
 }

function Person(name, birth, amount) {
    this.name = name;
    this.birth = birth;
    this.amount = amount;
    this.accountHistory = [`Initial: ${amount}`]
}

Person.prototype = {
  getInfo() {
    console.log(`Name: ${this.name}, Age: ${calculateAge(this.birth)}, Amount: ${this.amount}$`);
  },
  addMoney(value, notes) {
    this.amount += value;
    console.log(`${notes}: ${value}`);
    this.accountHistory.push(`${notes}: ${value}`);
  },
  withdrawMoney(value, notes) {
    this.amount -= value;
    console.log(`${notes}: -${value}`);
    this.accountHistory.push(`${notes}: -${value}`);
  },
  getAccountHistory() {
    console.log(this.accountHistory);
    return this.accountHistory;
  }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo();
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo();
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory();

pavel.getInfo();
