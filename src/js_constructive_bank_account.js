function Person (name, date, money) {
	this.name = name;
	this.date = date.split('.').reverse().join('/');
    this.money = money;
    this.log = [];
}

Person.prototype.getInfo = function () {
    let birthdate = new Date(this.date);
    let cur = new Date();
    let diff = cur-birthdate;
    let age = Math.floor(diff/31557600000);
    console.log(`Name: ${this.name}, Age: ${age}, Amount: ${this.money}$`)
}

Person.prototype.addMoney = function (sum, add) {
    this.money += sum;
    this.log.push(`${sum} : ${add}`)
}

Person.prototype.getAccountHistory = function () {
    console.log(...this.log)
}

Person.prototype.withdrawMoney = function (sum, add) {
    this.money -= sum;
    this.log.push(`-${sum} : ${add}`)
}