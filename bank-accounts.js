function Person (name, dateOfBirth, money) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.money = money;
  this.history = [{name: `Initial`, value: `${money}`}];
}

Person.prototype.getClientAge = function() {
  const arrayBDay = this.dateOfBirth.split('.').reverse();
  const bDay = new Date(...arrayBDay);
  const ageDifMs = Date.now() - bDay.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.logHistory = function(cash, info) {
  this.history.push({name: `${info}`, value: cash});
};

Person.prototype.getInfo = function() {
  return (`Name: ${this.name}, Age: ${this.getClientAge()}, Amount: ${this.money}$`)
};

Person.prototype.addMoney = function(cash, info) {
  this.money += cash;
  this.logHistory(cash, info);
};

Person.prototype.withdrawMoney = function(cash, info) {
  this.money -= cash;
  this.logHistory(-cash, info);
};

Person.prototype.getAccountHistory = function() {
  return (this.history);
};

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself> 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24 <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$