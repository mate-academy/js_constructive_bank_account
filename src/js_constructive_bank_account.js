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
  this.addLog(sum, '-' + add)
};

const dmytro = new Person("Dmytro", "26.11.1994", 1000);
const pavel = new Person("Pavel", "06.06.1990", 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, "salary");
dmytro.withdrawMoney(500, "new phone");
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, "apartment rent");
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']
pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
