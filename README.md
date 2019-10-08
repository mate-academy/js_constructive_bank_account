# Constructive Bank Account

Create a **function/constructor** for working with bank account data of a person.

**Requirements:**

- The person has the following initial info: name, date of birth in string format, initial amount of money.
- We can do the following options with person:

    `getInfo` - print into console info about the current person

    `addMoney` - plus money to his bank account and some info about transaction

    `withdrawMoney` - minus money from his account and some info about transaction

    `getAccountHistory` - print into console the history of managing his account

- Use `this` to describe these methods.


```js
const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
```

**Tips:**

- How to find a person's age:
    - [https://stackoverflow.com/a/24181701/4449154](https://stackoverflow.com/a/24181701/4449154)
    - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Examples)
    - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)


function Person(name, birthDate, amount) {
  this.name = name;
  this.birthDate = birthDate;
  this.amount = amount;
  this.age = getAge(this.birthDate);
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
}

Person.prototype.withdrawMoney = function(amount, target) {
  this.amount -= amount;
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
dmytro.getInfo()
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo()
