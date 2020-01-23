'use strict';

const BankAccount = require('./bankAccount');

test('Can be used as a constructor', () => {
  const account = new BankAccount('Dmytro', 1000);

  expect(account)
    .toBeInstanceOf(BankAccount)
});

test('Should have all the methods in prototype', () => {
  expect(BankAccount.prototype.getAccountHistory)
    .toBeInstanceOf(Function);

  expect(BankAccount.prototype.getInfo)
    .toBeInstanceOf(Function);

  expect(BankAccount.prototype.addMoney)
    .toBeInstanceOf(Function);

  expect(BankAccount.prototype.withdrawMoney)
    .toBeInstanceOf(Function);
});

test('Should have an account info', () => {
  const account = new BankAccount('Dmytro', 1000);

  expect(account.getInfo())
    .toBe(`Name: Dmytro, Amount: 1000$`);
});

test('Should have an initial history', () => {
  const account = new BankAccount('Dmytro', 1000);
  const history = account.getAccountHistory();

  expect(history)
    .toBeInstanceOf(Array);

  expect(history)
    .toHaveLength(1)

  expect(history[0])
    .toBe('Initial: 1000');
});

test('Should add money', () => {
  const account = new BankAccount('Oleg', 200);

  account.addMoney(2100, 'salary');
  account.addMoney(400, 'lottery');

  expect(account.getInfo())
    .toBe(`Name: Oleg, Amount: 2700$`);
});

test('Should withdraw money', () => {
  const account = new BankAccount('Oleg', 2000);

  account.withdrawMoney(600, 'new phone');
  account.withdrawMoney(700, 'products');

  expect(account.getInfo())
    .toBe(`Name: Oleg, Amount: 700$`);
});

test('Should update accountHistory', () => {
  const account = new BankAccount('Oleg', 1700);

  account.addMoney(2000, 'salary');
  account.withdrawMoney(500, 'new phone');

  const history = account.getAccountHistory();

  expect(history)
    .toHaveLength(3);

  expect(history[0])
    .toBe('Initial: 1700');

  expect(history[1])
    .toBe('salary: 2000');

  expect(history[2])
    .toBe('new phone: -500');
});
