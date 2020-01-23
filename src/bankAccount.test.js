'use strict';

const BankAccount = require('./bankAccount');

test('Should return account info', () => {
  const account = new BankAccount('Dmytro', '26.11.1994', 1000);

  expect(account.getInfo())
    .toBe(`Name: Dmytro, Age: 26, Amount: 1000$`);
});

test('Should return info after money operation and accountHistory', () => {
  const account = new BankAccount('Oleg', '26.09.1993', 1700);

  account.addMoney(2000, 'salary');
  account.withdrawMoney(500, 'new phone');

  expect(account.getInfo())
    .toBe(`Name: Oleg, Age: 27, Amount: 3200$`);

  expect(account.getAccountHistory()[0])
    .toBe('Initial: 1700');

  expect(account.getAccountHistory()[1])
    .toBe('salary: 2000');

  expect(account.getAccountHistory()[2])
    .toBe('new phone: -500');
});
