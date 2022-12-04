"use strict";
const greeting = (person) => {
    console.log(`Hello, ${person.name}!`);
};
const changeName = (person) => {
    person.name = 'Xablau';
};
const me = {
    name: 'Cadu',
    age: 23,
    programmer: true,
    greet(lastname) {
        console.log(`Hello ${this.name} ${lastname}`);
    },
};
console.log(changeName(me));
console.log(greeting(me));
console.log(me.greet('Salamanca'));
// usando classes
class Client {
    constructor() {
        this.name = '';
    }
    greet(lastname) {
        console.log(`Hello ${this.name} ${lastname}`);
    }
}
const client = new Client;
client.name = 'Jess';
greeting(client);
client.greet('Pinkman');
