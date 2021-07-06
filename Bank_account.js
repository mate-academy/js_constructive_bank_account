function Person(name, birthday, money) {
  this.name = name;
  this.birthday = birthday;
  this.money = money;
  this.history = [{name: 'Initial', value: money}];
}
  
Person.prototype.calculateAge = 
  function (birthday) {
    return ((Date.now() - Date.parse(birthday)) / (24 * 3600 * 365.25 * 1000)) | 0;
}  

Person.prototype.addMoney = 
  function(amount, source) {
    this.money += amount;
    this.history.push({name: source, value: amount});
    return `${source}: ${amount}`;
  }

  Person.prototype.withdrawMoney = 
   function(amount, spending) {
    this.money = this.money - amount;
    this.history.push({name: spending, value: -amount});
    return `${spending}: -${amount}`;
  }

  Person.prototype.getInfo = 
  function() {
    return `Name: ${this.name}, Age: ${this.calculateAge(this.birthday)}, Amount: ${this.money}$`;
  }

  Person.prototype.getAccountHistory =
  function() {
    return this.history.map(element => {
      return `${element.name}: ${element.value}`;
    });
  }