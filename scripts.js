function Person(name, birth, amountOfMoney) {
    
  this.name = name;
  this.birth = birth.split('.').reverse();
  this.amountOfMoney = amountOfMoney;
  this.transactions = [`Initial: ${amountOfMoney}`];
}
const methods = {
  age: function() {
      return new Date(Date.now() - new Date(this.birth).getTime()).getFullYear() - 1970
    },
  
  getInfo: function() {
      console.log(`Name: ${this.name}, Age: ${this.age()}, Amount: ${this.amountOfMoney}`);
    },
  addMoney: function(digit, transaction) {
      this.amountOfMoney += digit;
      this.transactions.push(` ${transaction} : ${digit}`);
    },
    
  withdrawMoney: function(digit, transaction) {
      this.amountOfMoney -= digit;
      this.transactions.push(` ${transaction} : -${digit}`);
    },
    
  getAccountHistory: function() {
      console.log(`${this.transactions}`);
    }
}
Person.prototype = methods;
