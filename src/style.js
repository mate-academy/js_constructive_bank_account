function Person(name, dateOfBirthday, amount = 0) {
  this.name = name;
  this.dateOfBirthday = dateOfBirthday;
  this.balance = amount;
  this.accountHistory = [{name: 'initial', value: amount}];
};

Person.prototype.getAge = function() {
  const date =  new Date(Date.now() - Date.parse(this.dateOfBirthday.split('.').reverse().join('.')));
  return Math.abs(date.getUTCFullYear() - 1970);
};

Person.prototype.getInfo = function() {
  return (`name: ${this.name}, Age: ${this.getAge(this.dateOfBirthday)}, Amount: ${this.balance}$`);
};

Person.prototype.pushInfo = function(accountHistory, amount, srcMassage) {
  accountHistory.push({name: srcMassage, value: amount});
};

Person.prototype.addMoney = function(amount, srcMassage) {
  this.balance += amount;
  this.pushInfo(this.accountHistory, amount, srcMassage);
};

Person.prototype.withdrawMoney = function(amount, srcMassage) {
  if (this.balance < amount) {
    console.log('You can not withdraw money');
  } else {
    this.balance -= amount;
    this.pushInfo(this.accountHistory, -amount, srcMassage);
  }
};

Person.prototype.getAccountHistory = function() {
  const history = [];
  for (let item of this.accountHistory) {
    history.push(`${item.name}: ${item.value}`);
  }
  return history;
};

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
console.log(dmytro.getInfo()); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

console.log(pavel.getInfo()); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$