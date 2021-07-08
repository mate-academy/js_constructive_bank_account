    function Person(name, bday, money) {
        this.name = name;
        this.bday = bday;
        this.money = money;
        this.age = this.getAge(this.formatDate(bday));
        this.history = [`Initial: ${money}`];
    }


    Person.prototype.formatDate = function (date) {
        return date.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1");
    };

    Person.prototype.getAge = function (birthDate) {
        return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
    };

    Person.prototype.getInfo = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.money}$`);
    };

    Person.prototype.addMoney = function (amount, purpose) {
        this.money += amount;
        this.history.push(`${purpose}: ${amount}`);
    }

    Person.prototype.withdrawMoney = function (amount, purpose) {
        this.money -= amount;
        this.history.push(`${purpose}: ${amount * -1}`);
    }
    Person.prototype.getAccountHistory = function () {
        console.log(dmytro.history.join(', '));
    }

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
