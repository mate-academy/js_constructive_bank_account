function Person(name, birthday, amount){
  this.name = name;
  this.birthday = birthday;
  this.amount = amount;
  this.history = [{name: 'Initial', sum: this.amount}];
}

Person.prototype.getAge = function (date) {
  const [day, month, year] = date.split('.');
  return new Date(new Date() - new Date(year, month, day)).getFullYear() - 1970;
}

Person.prototype.getInfo = function () {
  return (`Name: ${this.name}, Age: ${getAge(this.birthday)}, Amount: ${this.amount}\$`);
};

Person.prototype.addMoney = function (sum, transaction) {
  this.amount += sum;
  this.history.push({name: transaction, sum: sum});
};

Person.prototype.withdrawMoney = function (sum, transaction) {
  this.amount -= sum;
  this.history.push({name: transaction, sum: sum});
};

Person.prototype.getAccountHistory = function() {
  return this.history;
};

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
console.log(dmytro.getInfo()); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

console.log(pavel.getInfo()); // // Name: Pavel, Age: 29, Amount: 400$
