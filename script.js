const Person = function(name, birthday, money) {
  this.name = name;
  this.birthday = birthday;
  this.money = money;
  this.accountHistory = [];
  this.accountHistory.push({message: 'Initial', amount: money}); 
};

Person.prototype.getAccountHistory = function() {
  console.log(this.accountHistory.map(obj => `${obj.message}: ${obj.amount}`));
}

Person.prototype.addMoney = function(amount, msg) {
  this.money += amount;
  this.accountHistory.push({message: msg, amount: amount});
}

Person.prototype.withdrawMoney = function(amount, msg) {
  this.money -= amount;
  this.accountHistory.push({message: msg, amount: '-' + amount});
}

Person.prototype.calculateAge = function() {
  let date =  new Date(Date.now() - Date.parse(this.birthday.split('.').reverse().join('.')));

  return Math.abs(date.getUTCFullYear() - 1970)
}

Person.prototype.getInfo = function() {
  console.log(`Name: ${this.name} \nAge: ${this.calculateAge()} \nAmount: ${this.money}$`);
}