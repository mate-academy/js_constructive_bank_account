function Person(name, birthDate, amount) {
  this.name = name;
  this.birthDate = birthDate;
  this.amount = amount;
  this.age = getAge(this.birthDate);
  this.accountHistory = [`Initial: ${this.amount}`];
}

function getAge(birthDate) {
  const normalizeDate = birthDate.split('.');
  let tmp = normalizeDate[0];
  normalizeDate[0] = normalizeDate[1];
  normalizeDate[1] = tmp;
  birthDate = normalizeDate.join('.')
  let age = Math.abs(new Date(Date.now() - Date.parse(birthDate)).getUTCFullYear() - 1970);
  return age;
}

Person.prototype.getInfo = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}\$`);
}

Person.prototype.addMoney = function(amount, source) {
  this.amount += amount;
  this.accountHistory.push(`${source}: ${amount}`);
}

Person.prototype.withdrawMoney = function(amount, target) {
  this.amount -= amount;
  this.accountHistory.push(`${target}: -${amount}`);
}

Person.prototype.getAccountHistory = function() {
  console.log(this.accountHistory);
}