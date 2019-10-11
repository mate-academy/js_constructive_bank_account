function Person(name, birthday, amount) {
  this.name = name;
  this.amount = amount;
  this.birthday = birthday;
  this.accountHistory = [`Initial: ${this.amount},`];
}

const personPrototipes = {
  __getAge: function(birthday) {
    const biDay = birthday.split('.').reverse().join('.');
    let ageDifMs = Date.now() - new Date(biDay);
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },
  getInfo: function() {
    return `Name: ${this.name}, Age: ${this.__getAge(this.birthday)}, Amount: ${this.amount}\$`;
  },
  addMoney: function(salary, income) {
    return this.amount += salary;
    this.accountHistory.push(`${income}: ${salary}`);
  },
  withdrawMoney: function(minusMoney, purchase) {
    return this.amount -= minusMoney;
    this.accountHistory.push(`${purchase}: -${minusMoney}`);
  },
  getAccountHistory: function() {
    return this.accountHistory;
  }
};

Person.prototype = personPrototipes;

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);


console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
console.log(dmytro.addMoney(2000, 'salary'));
console.log(dmytro.withdrawMoney(500, 'new phone'));
console.log(dmytro.getInfo()); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
console.log(dmytro.withdrawMoney(500, 'apartment rent'));
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']
console.log(pavel.getInfo()); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$

