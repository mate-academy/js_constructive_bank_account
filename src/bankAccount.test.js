'use strict';

const BankAccount = require('./bankAccount');

const getAge = () => {
  const today = new Date();
  const birthDate = new Date('26.11.1994'.split('.').reverse());
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
  }

  return age;
};

test('Should be an object', () => {
  const account = new BankAccount('Dmytro', '26.11.1994', 1000);

  expect(typeof account)
    .toBe('object');
});

test('Should has methods', () => {
  const account = new BankAccount('Dmytro', '26.11.1994', 1000);

  expect(account.getAccountHistory)
    .not.toBe(undefined);

  expect(account.getInfo)
    .not.toBe(undefined);

  expect(account.addMoney)
    .not.toBe(undefined);

  expect(account.withdrawMoney)
    .not.toBe(undefined);
});

test('Should return account info', () => {
  const account = new BankAccount('Dmytro', '26.11.1994', 1000);

  expect(account.getInfo())
    .toBe(`Name: Dmytro, Age: ${getAge('26.11.1994')}, Amount: 1000$`);
});

test('Should add money', () => {
  const account = new BankAccount('Oleg', '26.09.1993', 200);

  account.addMoney(2100, 'salary');
  account.addMoney(400, 'lottery');

  expect(account.getInfo())
    .toBe(`Name: Oleg, Age: ${getAge('26.09.1993')}, Amount: 2700$`);
});

test('Should withdraw money', () => {
  const account = new BankAccount('Oleg', '26.09.1993', 2000);

  account.withdrawMoney(600, 'new phone');
  account.withdrawMoney(700, 'products');

  expect(account.getInfo())
    .toBe(`Name: Oleg, Age: ${getAge('26.09.1993')}, Amount: 700$`);
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
    .toBe(`Name: Oleg, Age: ${getAge('26.09.1993')}, Amount: 3200$`);

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
