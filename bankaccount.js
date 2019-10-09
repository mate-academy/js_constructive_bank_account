function calculateAge(birthday) {
    let thisyear = new Date().getFullYear();
    let birthyear = +birthday.split('.')[2];
    return thisyear - birthyear;
}

function Person(name, birth_date, sallary) {
  this.name = name;
  this.birthday = birth_date;
  this.moneyoverall = sallary;
  this.age = calculateAge(this.birthday);
  this.account_history = [`Initial: ${sallary}`];
}


Person.prototype.getInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.moneyoverall}$`);
}

Person.prototype.addMoney = function(amount, typeof_inc) {
    this.moneyoverall += amount;
    this.account_history.push(`${typeof_inc}: ${amount}`);
}

Person.prototype.withdrawMoney = function (amount, typeof_outc) {
    this.moneyoverall -= amount;
    this.account_history.push(`${typeof_outc}: -${amount}`);
}

Person.prototype.getAccountHistory = function () {
    console.log(this.account_history)
}

