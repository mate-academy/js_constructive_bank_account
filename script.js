function Person(name, birth, money) {
  this.name = name;
  this.birthday = birth;
  this.money = money;
  this.info = [`Initial: ${money}`];

  this.getInfo = function() {
        console.log(`Name: ${this.name}, Age: ${this.__calculateAge()}, Amount: ${this.money}$`)
      }
    
  this.addMoney = function(amount, info) {
        this.money += amount;
        this.info.push(`${info}: ${amount}`);
      }
    
  this.withdrawMoney = function(amount, info) {
        this.money -= amount;
        this.info.push(`${info}: -${amount}`);
      }
    
  this.getAccountHistory = function() {
        console.log(this.info);
      }
    
  this.__calculateAge = function() {
        const birthArray = this.birthday.split('.');
        const age = new Date(Date.now() - +new Date(birthArray[2], birthArray[1], birthArray[0])).getFullYear() -  new Date(0).getFullYear();
        
        return age;
      }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']
pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
