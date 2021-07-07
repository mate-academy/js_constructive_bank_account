function Person(name, birthDate, amount) {
  this.name = name;
  this.birthDate = birthDate;
  this.amount = amount;
  this.accountHistory = [{name: 'initial', value: this.amount}];
}

Person.prototype.pushItems = function(accountHistory, amount, source) {
  accountHistory.push({name: source, value: amount});
}

Person.prototype.getAge = function(birthDate) {
  birthDate = birthDate.split('.').reverse().join('.');
  let age = Math.abs(new Date(Date.now() - Date.parse(birthDate)).getUTCFullYear() - 1970);
  return age;
}

Person.prototype.getInfo = function() {
  return (`Name: ${this.name}, Age: ${this.getAge(this.birthDate)}, Amount: ${this.amount}\$`);
}

Person.prototype.addMoney = function(amount, source) {
  this.amount += amount;
  this.pushItems(this.accountHistory, amount, source);
}

Person.prototype.withdrawMoney = function(amount, source) {
  this.amount -= amount;
  this.pushItems(this.accountHistory, -amount, source);
}

Person.prototype.getAccountHistory = function() {
  const historyList = [];
  for (let keys of this.accountHistory) {
    historyList.push(`${keys.name}: ${keys.value}`);
  }
  return historyList;
}
