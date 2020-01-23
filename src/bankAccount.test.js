'use strict';

const BankAccount = require('./bankAccount');

test('Should return account info', () => {
  const account = new BankAccount('Dmytro', '26.11.1994', 1000);

  expect(account.getInfo())
    .toBe(`Name: Dmytro, Age: 26, Amount: 1000$`);
});

test('Should make money operations', () => {
  const account = new BankAccount('Oleg', '26.09.1993', 200);

  account.addMoney(2100, 'salary');
  account.withdrawMoney(600, 'new phone');
  account.withdrawMoney(700, 'products');
  account.addMoney(400, 'lottery');

  expect(account.getInfo())
    .toBe(`Name: Oleg, Age: 27, Amount: 1400$`);
});

test('Should have initial history', () => {
  const account = new BankAccount('Dmytro', '26.11.1994', 1000);

  const history = account.getAccountHistory();

  expect(history[0])
    .toBe('Initial: 1000');

  expect(typeof history)
    .toBe('object');

  expect(history.length)
    .toBe(1);
});

test('Should change accountHistory', () => {
  const account = new BankAccount('Oleg', '26.09.1993', 1700);

  account.addMoney(2000, 'salary');
  account.withdrawMoney(500, 'new phone');

  const history = account.getAccountHistory();

  expect(account.getInfo())
    .toBe(`Name: Oleg, Age: 27, Amount: 3200$`);

  expect(history[0])
    .toBe('Initial: 1700');

  expect(history[1])
    .toBe('salary: 2000');

  expect(history[2])
    .toBe('new phone: -500');

  expect(typeof history)
    .toBe('object');

  expect(history.length)
    .toBe(3);
});
