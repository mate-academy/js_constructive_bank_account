function Creat_account(name, birthday, money) {
  this.name = name;
  this.birthday = birthday;
  this.money = money;

  this.getInfo = () => `Name: ${this.name}, Age: ${calculateAge(this.birthday)}, Amount: ${this.money}$`;
  
  const history = [`Initial: ${money}`];

  this.addMoney = (amount, source) => {
    this.money = this.money + amount;
    history.push(`${source}: ${amount}`);
    return `${source}: ${amount}`;
  }

  this.withdrawMoney = (amount, spending) => {
    this.money = this.money - amount;
    history.push(`${spending}: -${amount}`);
    return `${spending}: -${amount}`;
  }

  this.getAccountHistory = () => {
    return history;
  }
}

function calculateAge(birthday) {
  return ((Date.now() - Date.parse(birthday)) / (24 * 3600 * 365.25 * 1000)) | 0;
}