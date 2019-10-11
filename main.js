
const Person = function (name, birth , money) {
  this.name = name;
  this.birth = birth;
  this.money = money;
  this.moneyHistory = [{name: 'Initial', value: this.money}];
};

const prototypes = {

  _calculateAge: function(birthday) {
    const bDay = birthday.split('.').reverse().join(', ');
    const age = Date.now() - new Date(bDay).getTime();
    const userAge = new Date(age);
    return Math.abs(userAge.getUTCFullYear() - 1970);
  },

  _createHistory: function(amount, reason) {
    this.moneyHistory.push({name: reason, value: amount});
  },

  getInfo : function () {
    return `Client: ${this.name}\nAge: ${this._calculateAge(this.birth)}\nDate of birth: ${this.birth}\nAmount: ${this.money}`;
  },

  addMoney : function (amount, reason) {
    this.money += amount;
    this._createHistory(amount, reason);
    return `${this.name}'s balance is: ${this.money}, added  ${amount} due to ${reason}`;
  },

  withdrawMoney: function(amount, reason) {
    this.money -= amount;
    this._createHistory(`-${amount}`, reason);
    return `${this.name}'s balance is: ${this.money}, spent  ${amount} due to ${reason}`;
  },

  getAccountHistory:function () {
    const history = [];
    this.moneyHistory.forEach(item => history.push(` ${item.name}: ${item.value}`));
    return `${this.name}'s money history --- ${history.toString()}`;
  }

};

Person.prototype = prototypes;

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo());
console.log(dmytro.addMoney(2000, 'salary'));
console.log(dmytro.withdrawMoney(500, 'new phone'));
console.log(dmytro.getInfo());
console.log(dmytro.withdrawMoney(500, 'apartment rent'));
console.log(dmytro.getAccountHistory());
console.log(pavel.getInfo());

