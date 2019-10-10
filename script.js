'use strict';

function bankAccount(name, birth, moneyAmount) {
  this.name = name;
  this.birth = birth;
  this.moneyAmount = moneyAmount;
  this.accountHistory = [`Initial: ${moneyAmount}`];
}

bankAccount.prototype.getInfo = function() {
  this.age = function() {
    let date = this.birth.split('.');
    let day = date[0];
    let month = date[1];
    let year = date[2];

    let yearNow = new Date().getFullYear();
    let monthNow = new Date().getMonth() + 1;
    let dayNow = new Date().getDate();

    if (monthNow === month && dayNow < day || monthNow < month) {
      return yearNow - year - 1;
    } else {
      return yearNow - year;
    }
  }

  console.log(`Name: ${this.name}, Age: ${this.age(this.birth)}, Amount: ${this.moneyAmount}$`);
};

bankAccount.prototype.addMoney = function(sum, service) {
  this.moneyAmount += sum;
  this.accountHistory.push(`${service}: ${sum}`);
};

bankAccount.prototype.withdrawMoney = function(withdrawSum, service) {
  this.moneyAmount -= withdrawSum;
  this.accountHistory.push(`${service}: -${withdrawSum}`);
};
  
bankAccount.prototype.getAccountHistory = function() {
  console.log(this.accountHistory);
}