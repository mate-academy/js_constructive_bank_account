'use strict';

function bankAccount(name, birth, moneyAmount) {
  this.name = name;
  this.birth = birth;
  this.moneyAmount = moneyAmount;
  this.accountHistory = [{name: 'Initial', value: this.moneyAmount}];
  this.age = () => {
    const date = this.birth.split('.');
    const day = date[0];
    const month = date[1];
    const year = date[2];
  
    const yearNow = new Date().getFullYear();
    const monthNow = new Date().getMonth() + 1;
    const dayNow = new Date().getDate();
  
    const result = yearNow - year - 1;
    const simpleResult = yearNow - year;
  
    if (monthNow === month && dayNow < day || monthNow < month) {
      return result;
    } else {
      return simpleResult;
    }
  } 
}

bankAccount.prototype.createHistory = function(sum, service) {
  this.accountHistory.push({name: service, value: sum});
}

bankAccount.prototype.getInfo = function() {
  return `Name: ${this.name}, Age: ${this.age(this.birth)}, Amount: ${this.moneyAmount}$`;
};

bankAccount.prototype.addMoney = function(sum, service) {
  this.moneyAmount += sum;
  this.createHistory(sum, service);

  return this.moneyAmount;
};

bankAccount.prototype.withdrawMoney = function(sum, service) {
  this.moneyAmount -= sum;
  this.createHistory(sum, service);

  return this.moneyAmount;
};
  
bankAccount.prototype.getAccountHistory = function() {
  const history = [];

  for (let items of this.accountHistory) {
    history.push(`${items.name}: ${items.value}`);
  }

  return history;
}

