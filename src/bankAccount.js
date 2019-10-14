function Person(name, date, amount) {
  this.name = name; 
  this.date = date; 
  this.amount = amount; 
  this.accountHistory = [{Initial: amount}];
};

Person.prototype.getAge = function(date) {
  const [birthDay, birthMonth, birthYear] =  date.split('.'); 
  const yearNow = new Date().getFullYear(), 
        monthNow = new Date().getMonth() + 1, 
        dayNow = new Date().getDate();

  let age = ((monthNow === birthMonth && dayNow < birthDay || monthNow < birthMonth) ? yearNow - birthYear - 1 : yearNow - birthYear);

  return this.age = age; 
}; 

Person.prototype.getInfo = function() {
  console.log(`Name: ${this.name}, Age: ${this.getAge(this.date)}, Amount: ${this.amount}$`); 
};

Person.prototype.addHistory = function(money, info) {
  this.amount += money; 
  this.accountHistory.push({ [info]: money }); 
}

Person.prototype.addMoney = function(money, info) {
  this.addHistory(money, info); 
};

Person.prototype.withdrawMoney = function(money, info) {
  this.addHistory(-money, info); 
};

Person.prototype.getAccountHistory = function() {
  let arr = []; 
  for (let i = 0; i < this.accountHistory.length; i++) {
    arr.push(Object.entries(this.accountHistory[i]).flat(1).join(': ')); 
  }
  return arr.join(', '); 
};

//------------------------------------------------------------------------
const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
