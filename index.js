//getters and setter are methods that are used on a class that essentially look like
//properties

let balance = 500.00;

class Account {

    constructor (username){
    this.username = username;
    this.balance = 0;
  }

  get balance() {

  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  };

  commit() {
    if (!this.isAllowed()) return false;
    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  };
}

class Withdrawal extends Transaction{

  get value () {
    return this.amount;
  }
};

class Deposit extends Transaction{

  get value () {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}


const myAccount = new Account("mattparisien");
const t1 = new Deposit(200, myAccount);
t1.commit();
console.log(t1.value)
