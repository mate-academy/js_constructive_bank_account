function Person(name, birth, amount) {
  this.name = name;
  this.amount = amount;
  this.dateOfBirth = birth;
  this.history = [`Initial: ${this.amount}`];
}

Person.prototype = {
  getInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.getAge(this.dateOfBirth)}, Amount: ${this.amount}$.`);
  },

  addMoney: function (receipts, comment) {
    this.amount += receipts;
    this.history.push(`${comment}: ${receipts}`);
  },

  withdrawMoney: function (withdraw, comment) {
    this.amount -= withdraw;
    this.history.push(`${comment}: -${withdraw}`);
  },

  getAccountHistory: function () {
    console.log(this.history);
  },

  getAge: function (date) {
    const [day, month, year] = date.split('.')
    return new Date(new Date() - new Date(year, month, day)).getFullYear() - 1970;
  },
}

module.exports = Person;
