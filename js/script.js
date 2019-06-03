function Person(name, birthday, amount) {
  this.name = name;
  this.birthday = birthday.split('.').reverse();
  this.amount = amount;
  this.transactions = [`Initial: ${amount}`];
}
const methods = {
  getClientAge: function() {
      return new Date(Date.now() - new Date(this.birthday).getTime()).getFullYear() - 1970
    },

  getInfo: function() {
      console.log(`Name: ${this.name}, getClientAge: ${this.getClientAge()}, Amount: ${this.amount}`);
    },

  addMoney: function(cash, transaction) {
      this.amount += cash;
      this.transactions.push(` ${transaction} : ${cash}`);
    },

  withdrawMoney: function(cash, transaction) {
      this.amount -= cash;
      this.transactions.push(` ${transaction} : -${cash}`);
    },

  getAccountHistory: function() {
      console.log(`${this.transactions}`);
    }
}
Person.prototype = methods;

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo();
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo();
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory();

console.log('<------------------------------------------------>')

pavel.getInfo();
pavel.addMoney(1000, 'salary');
pavel.withdrawMoney(700, 'new tablet');
pavel.addMoney(500, 'gifts');
pavel.getAccountHistory();
