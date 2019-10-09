
const Person = function (name, birth , money) {
  this.name = name;
  this.birth = birth;
  this.money = money;
  this.moneyHistory = [];
};

const prototypes = {

  calculateAge: function(birthday) {
    const bDay = birthday.split('.').reverse().join(', ');
    const age = Date.now() - new Date(bDay).getTime();
    const userAge = new Date(age);
    return Math.abs(userAge.getUTCFullYear() - 1970);
  },

  getInfo : function () {
    console.log(`Client: ${this.name}\nAge: ${this.calculateAge(this.birth)}\nMoney: ${this.money}`)
  },

  addMoney : function (amount, reason) {
    this.money += amount;
    this.createHistory(amount, reason);
    console.log(`${this.name}'s balance is: ${this.money}, added  ${amount} due to ${reason}`)
  },

  withdrawMoney: function(amount, reason) {
    this.money -= amount;
    this.createHistory(`-${amount}`, reason);
    console.log(`${this.name}'s balance is: ${this.money}, spent  ${amount} due to ${reason}`);
  },

  getAccountHistory:function () {
    console.log(`Money History : ${this.moneyHistory.toString()}` );
  },

  createHistory: function(amount, reason) {
    this.moneyHistory.push(`${reason}: ${amount}`);
  }

};

Person.prototype = prototypes;

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo();
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo();
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory();
pavel.getInfo();
