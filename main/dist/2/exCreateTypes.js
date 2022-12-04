"use strict";
const account = {
    balance: 5700,
    deposit(value) {
        this.balance += value;
    }
};
const customer = {
    name: 'Roronoa Zoro',
    bankAccount: account,
    contacts: ['1234', '5678'],
};
customer.bankAccount.deposit(3000);
console.log(customer);
