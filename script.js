function age(birth) {
    const date = birth.split('.').reverse().join(', ');
    const ageMs = Date.now() - new Date(date).getTime();
    const userAge = new Date(ageMs);
    return Math.abs(userAge.getUTCFullYear() - 1970);
}

const Person = function (name, birth, money) {
    this.name = name;
    this.age = age(birth);
    this.money = money;
    this.history = [`Initial: ${money}`];
}

Person.prototype.getInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.money}\$`)
}

Person.prototype.addMoney = function (add, fromWhat) {
    this.money += add;
    this.history.push(`${fromWhat}: ${add}`);
}

Person.prototype.withdrawMoney = function (withdraw, forWhat) {
    this.money -= withdraw;
    this.history.push(`${forWhat}: ${withdraw}`);
}

Person.prototype.getAccountHistory = function () {
    console.log(this.history);
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$


