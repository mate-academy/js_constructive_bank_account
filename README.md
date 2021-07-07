# Constructive Bank Account

**Read the guideline before start**

1. Replace `<your_account>` with your Github username in the links
    - [PULL REQUEST](https://github.com/mate-academy/js_constructive_bank_account/pull/116)

2. [Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)
___

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
const dmytro = new Person('Dmytro', 1000);
const pavel = new Person('Pavel', 400);

dmytro.getInfo(); // print `Name: Dmytro, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Amount: 400$
```
