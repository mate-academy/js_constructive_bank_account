function Person(name, dateOfBirth, amount) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.amount = amount;
  this.age = this._getAge(this.dateOfBirth);
  this.accountHistory = [{'info': 'Initial', 'amount': this.amount}];
}

Person.prototype._getAge = function (dateOfBirth) {
  const dateArr = dateOfBirth.split('.');
  const year = dateArr[2];
  const month = dateArr[1];
  const day = dateArr[0];
  const yearNow = new Date().getFullYear();
  const monthNow = new Date().getMonth() + 1;
  const dayNow = new Date().getDate();
  return (monthNow === month && dayNow < day || monthNow < month) ?
  yearNow - year - 1 : yearNow - year;
}


Person.prototype.getInfo = function() {
  return (`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}\$`);
}

Person.prototype._changeAmount = function(money, info) {
  this.amount += money;
  this.accountHistory.push({'info': info, 'amount': money});  
}

Person.prototype.addMoney = function(money, info) {
  this._changeAmount(money, info);
}

Person.prototype.withdrawMoney = function(money, info) {
  this._changeAmount(-money, info);
}

Person.prototype.getAccountHistory = function() {
  return(`[ ${this.accountHistory.map(item => `'${item.info}: ${item.amount}'`).join(', ')}]`);
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
console.log(dmytro.getInfo()); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

console.log(pavel.getInfo()); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$