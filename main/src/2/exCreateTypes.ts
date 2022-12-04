type Account = {
  balance: number,
  deposit: (value: number) => void,
}

type Customer = {
  name: string,
  bankAccount: Account,
  contacts: string,
}

const account: Account = {
  balance: 5700,
  deposit(value) {
    this.balance += value;
  }
}

const customer = {
  name: 'Roronoa Zoro',
  bankAccount: account,
  contacts: ['1234', '5678'],
}

customer.bankAccount.deposit(3000);
console.log(customer);
