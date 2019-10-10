const Human = function(name, birthday, money) {
  this.name = name;
  this.birthday = birthday;
  this.money = money;
  this.history = [
  {
    info: 'initial',
    amount: money,
  }
];
}


Human.prototype.getInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.humanAge()}, Amount: ${this.money}$`);
}

Human.prototype.humanAge = function () {
  const birthdayRev = new Date(this.birthday.split('.').reverse());
  const ageDifMs = Date.now() - birthdayRev.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Human.prototype.addMoney = function (cash, str) {
  this.money += cash;
  this.addHistory(cash, str);
}

Human.prototype.withdrawMoney = function (cash, str) {
  this.money -= cash;
  this.addHistory(`-${cash}`, str);
}


Human.prototype.getAccountHistory = function () {
  const accountHistory = this.history.map(item => {
  return `${item.info}: ${item.amount}`;
  });
  console.log(accountHistory);
}

Human.prototype.addHistory = function (cash, str) {
  this.history.push(
  {
  info: str,
  amount: cash
  }
  )
}

const dmytro = new Human('Dmytro', '26.11.1994', 1000);
const pavel = new Human('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
