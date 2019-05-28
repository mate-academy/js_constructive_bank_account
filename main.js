function Person(name, birthday, amount) {
  this.name = name;
  this.birthday = birthday;
  this.amount = amount;
  this.transactions = [`Initial: ${amount}`];
  this.age = this.calculateAge(this.birthday);
}

const personMethods = {
  calculateAge: function(bDay) {
    const formatedDate = bDay.replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3");
    const ageDifMs = Date.now() - new Date(formatedDate).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },
  
  getInfo: function() {
    const info = `Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`;
    console.log(info);
  },

  addMoney: function(money, source) {
    this.amount += money;
    this.addTransactions(`${money}`, `${source}`);
  },

  withdrawMoney: function(money, source) {
    this.amount -= money;
    this.addTransactions(`-${money}`, `${source}`);
  },

  addTransactions: function(money, source) {
    this.transactions.push(`${source}: ${money}`);
  },

  getAccountHistory: function() {
    console.log(this.transactions);
  }
}

Person.prototype = personMethods;

const dmytro = new Person("Dmytro", "26.11.1994", 1000);
const pavel = new Person("Pavel", "06.06.1990", 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, "salary");
dmytro.withdrawMoney(500, "new phone");
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, "apartment rent");
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']