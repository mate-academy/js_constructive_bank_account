function Person(name, date, money) {
  this.name = name;
  this.date = date
    .split(".")
    .reverse()
    .join("/");
  this.money = money;
  this.log = [
    { name: "Initial:", value: "1000" },
    { name: "new phone:", value: "-500" },
    { name: "apartment rent:", value: "-500" }
  ];
}

Person.prototype._getAge = function() {
  let birthdate = new Date(this.date);
  let cur = new Date();
  let diff = cur - birthdate;
  return Math.floor(diff / 31557600000);
};

Person.prototype.getInfo = function() {
  console.log(
    `Name: ${this.name}, Age: ${this._getAge()}, Amount: ${this.money}$`
  );
};

Person.prototype.addLog = function (sum, add) {
  this.log.push({ name: `${add}:`, value: `${sum}` });
}

Person.prototype.addMoney = function(sum, add) {
  this.money += sum;
  this.addLog(sum, add)
};

Person.prototype.getAccountHistory = function() {
  let history = [];
  this.log.forEach((element, i) => {
    history[i] = element.name + ' ' + element.value;
  });
  console.log(history);
};

Person.prototype.withdrawMoney = function(sum, add) {
  this.money -= sum;
  this.addLog('-' + sum, add)
};
