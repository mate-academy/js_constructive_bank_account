function Person(name, dateOfBirth, balance){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.balance = balance;
    this.history = [{name: 'initial', value: this.balance}];
}

Person.prototype.getAge = function(birthDate) {
    const personBirthDate = birthDate.split('.').reverse().join('.');
    return Math.abs(new Date(Date.now() - Date.parse(personBirthDate)).getUTCFullYear() - 1970);
};

Person.prototype.getInfo = function () {
    return `Name: ${this.name}, Age: ${this.getAge(this.dateOfBirth)}, Amount: ${this.balance}$`;
};

Person.prototype.pushItems = function(history, amount, transaction) {
    history.push({name: transaction, value: amount});
};

Person.prototype.addMoney = function (amount, transaction) {
    this.balance = +this.balance + amount;
    this.pushItems(this.history, amount, transaction);
};

Person.prototype.withdrawMoney = function (amount, transaction) {
    this.balance = +this.balance - amount;
    this.pushItems(this.history, amount, transaction);
};

Person.prototype.getAccountHistory = function () {
    return this.history;
};

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$

