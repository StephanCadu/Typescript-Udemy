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
        this.lastPurchase = new Date;
    }
    greet(lastname) {
        console.log(`Hello ${this.name} ${lastname}`);
    }
}
const client = new Client;
client.name = 'Jess';
greeting(client);
client.greet('Pinkman');
console.log(client.lastPurchase);
const pow = (base, exp) => {
    // Math.pow(base, exp)
    // base ** exp
    return Array(exp).fill(base).reduce((acc, cur) => acc * cur);
};
console.log(pow(3, 10));
class A {
    a() { }
}
class AB {
    a() { }
    b() { }
}
class ABC {
    a() { }
    b() { }
    c() { }
}
class ABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 2;
const z = 2;
x.log();
y.log();
z.log();
const cli = { name: 'Nome', toString() { return this.name; } };
cli.log();
