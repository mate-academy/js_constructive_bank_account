function Person(name, dateOfBirth, balance){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.balance = balance;
    this.history = [{name: 'Initial', value: this.balance}];
}

function getAge(birthDate) {
    const dobDate = birthDate.split('.').reverse().join('-');
    return Math.floor((new Date() - new Date(dobDate).getTime()) / 3.15576e+10)
}

function pushItems(history, amount, transaction) {
    history.push({name: transaction, value: amount});
}

Person.prototype.getInfo = function () {
    return `Name: ${this.name}, Age: ${getAge(this.dateOfBirth)}, Amount: ${this.balance}$`
};

Person.prototype.addMoney = function (sum, transaction) {
    this.balance = +this.balance + sum;
    pushItems(this.history, sum, transaction);
};

Person.prototype.withdrawMoney = function (sum, transaction) {
    this.balance = +this.balance - sum;
    pushItems(this.history, sum, transaction);
};

Person.prototype.getAccountHistory = function () {
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
