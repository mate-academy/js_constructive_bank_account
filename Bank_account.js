function Person(name, birthday, money) {
  this.name = name;
  this.birthday = birthday;
  this.money = money;
  this.history = [`Initial: ${money}`];
}

function calculateAge(birthday) {
  return ((Date.now() - Date.parse(birthday)) / (24 * 3600 * 365.25 * 1000)) | 0;
}  

Person.prototype.addMoney = 
function(amount, source) {
  this.money = this.money + amount;
  this.history.push(`${source}: ${amount}`);
  return `${source}: ${amount}`;
}

Person.prototype.withdrawMoney = 
 function(amount, spending) {
  this.money = this.money - amount;
  this.history.push(`${spending}: -${amount}`);
  return `${spending}: -${amount}`;
}

Person.prototype.getInfo = 
function() {
  return `Name: ${this.name}, Age: ${calculateAge(this.birthday)}, Amount: ${this.money}$`;
}

Person.prototype.getAccountHistory =
function() {
  return this.history;
}