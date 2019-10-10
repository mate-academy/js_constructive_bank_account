function Person(name, birthDate, amount) {
  this.name = name;
  this.birthDate = birthDate;
  this.amount = amount;
  this.age = getAge(this.birthDate);
  this.accountHistory = [{name: 'initial', value: this.amount}];
}

function getAge(birthDate) {
  birthDate = birthDate.split('.').reverse().join('.');
  let age = Math.abs(new Date(Date.now() - Date.parse(birthDate)).getUTCFullYear() - 1970);
  return age;
}

function pushItems(accountHistory, amount, source) {
  accountHistory.push({name: source, value: amount});
}

Person.prototype.getInfo = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}\$`);
}

Person.prototype.addMoney = function(amount, source) {
  this.amount += amount;
  pushItems(this.accountHistory, amount, source);
}

Person.prototype.withdrawMoney = function(amount, source) {
  this.amount -= amount;
  pushItems(this.accountHistory, -amount, source);
}

Person.prototype.getAccountHistory = function() {
  const historyList = [];
  for (let keys of this.accountHistory) {
    historyList.push(`${keys.name}: ${keys.value}`);
  }
  console.log(historyList);
}
