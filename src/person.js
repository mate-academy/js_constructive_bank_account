function Person(name, birthDate, money) {
    this.name = name;
    this.age = calculateAge(birthDate);
    this.money = money;
    this.accountHistory = [];

    this.accountHistory.push(`Initial: ${money}`)
}

function calculateAge(birthday) {
    let ageDifMs = Date.now() - new Date(birthday.split('.').reverse().join(', ')).getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.money}$`)
};

Person.prototype.addMoney = function (amount, source) {
    this.money += amount;
    this.accountHistory.push(`${source}: ${amount}`)
};

Person.prototype.withdrawMoney = function (amount, purpose) {
    this.money -= amount;
    this.accountHistory.push(`${purpose}: -${amount}`);
};

Person.prototype.getAccountHistory = function () {
    console.log(this.accountHistory);
};


const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

