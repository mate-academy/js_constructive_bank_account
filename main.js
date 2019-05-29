const Person = function(name, date, money) {
        this.name = name,
            this.birthday = date,
            this.money = money,
            this.history = ['Initial: ' + this.money];

    this.getInfo = function() {
        let year = this.birthday.split('.');
        let age = 2019 - year[2];
        console.log(`Name: ${this.name}, Age: ${age}, Amount: ${this.money}$`);
    };

    this.addMoney = function(money, salary) {
        this[salary] = money;
        this.money += this[salary];
        this.history.push(`${salary}: ${this[salary]}`);
    };

    this.withdrawMoney = function(money, purchase) {
        this[purchase] = money;
        this.money -= this[purchase];
        this.history.push(`${purchase}: -${this[purchase]}`);
    };

    this.getAccountHistory = function() {
        console.log(this.history);
    }
};

let user = new Person('dima', '25.12.1999', 1000);
user.addMoney(2000, 'salary');
user.withdrawMoney(500, 'mobile');
user.withdrawMoney(500, 'apartment rent');
user.getInfo();
user.getAccountHistory();
let user2 = new Person('Pavel', '25.12.1999', 400);
user2.getInfo();
