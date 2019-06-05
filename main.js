const prototype = {
  getInfo: function() {
    console.log(`Name: ${this.name}, Age: ${this.calculateAge(this.dateBD)}, Amount: ${this.cashBrush}$`);
  },

  addMoney: function(money, thing) {
    this.cashBrush += money;
    this.createHistory(money, thing);
    console.log(`Money already added!`);
  },

  withdrawMoney: function(money, thing) {
    this.cashBrush -= money;
    this.createHistory(-money, thing);
    console.log(`Money withdraw`);
  },

  getAccountHistory: function() {
    console.log(this.history);
  },

  createHistory: function(money, thing) {
    this.history.push(`${thing}: ${money}$`);
    console.log(`This is ${this.name} history:${this.history}`);
  },

  calculateAge: function(birthday) {
    const bDay = birthday.split('.').reverse().join(', ');
    const age = new Date().getFullYear() - new Date(bDay).getFullYear() -1;
    return age;
  }
}

Person.prototype = prototype;

function Person(name, date, amount) {
  this.name = name;
  this.dateBD = date;
  this.cashBrush = amount;
  this.history = [];
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo();
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo();
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory();
pavel.getInfo();
