function Person(name, birthDate, amount) {
  this.name = name;
  this.birthDate = birthDate;
  this.age = this._getAge(birthDate);
  this.amount = amount;
  this.accountHistory = [
    {"Initial": this.amount},
  ];
}

Person.prototype._getAge = function (birthDate) {
  const birthDateArr = birthDate.split('.');
  const year = birthDateArr[2];
  const month = birthDateArr[1];
  const day = birthDateArr[0];
  const yearNow = new Date().getFullYear();
  const monthNow = new Date().getMonth() + 1;
  const dayNow = new Date().getDate();
  const result = (yearNow - year);
  return (monthNow === month && dayNow < day || monthNow < month)
    ? result - 1
    : result;
}

Person.prototype.getInfo = function () {
  return (`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`);
}

Person.prototype.addAccountHistory = function (amountOfMoney, purpose) {
  this.amount += amountOfMoney;
  this.accountHistory.push({ "Purpose": purpose, "Amount of money": amountOfMoney });
}

Person.prototype.addMoney = function (amountOfMoney, purpose) {
  this.addAccountHistory(amountOfMoney, purpose);
}

Person.prototype.withdrawMoney = function (amountOfMoney, purpose) {
  this.addAccountHistory(-amountOfMoney, purpose);
}

Person.prototype.getAccountHistory = function () {
  return this.accountHistory;
}

// Usage

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

// dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
// dmytro.addMoney(2000, 'salary');
// dmytro.withdrawMoney(500, 'new phone');
// dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
// dmytro.withdrawMoney(500, 'apartment rent');
// dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']
console.log(dmytro.getInfo());
console.log(dmytro.addMoney(2000, 'salary'));
console.log(dmytro.withdrawMoney(500, 'new phone'));
console.log(dmytro.getInfo());
console.log(dmytro.withdrawMoney(500, 'apartment rent'));
console.log(dmytro.getAccountHistory());

pavel.getInfo(); // Name: Pavel, Age: <calculate yourself>, Amount: 400$
pavel.addMoney(800, 'salary');
pavel.withdrawMoney(20, 'cappuccino');
pavel.withdrawMoney(180, 'theatre');
pavel.withdrawMoney(480, 'iphone 6s');
pavel.getInfo(); // Name: Pavel, Age: <calculate yourself>, Amount: 520$
pavel.getAccountHistory(); // [ 'Initial: 400', 'salary: 800', 'cappuccino: -20', 'theatre: -180', 'iphone 6s: -480']