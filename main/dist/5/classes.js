"use strict";
class Data {
    constructor(day = 1, month = 1, year = 1970) {
        // publics
        this.day = 16;
        this.month = 11;
        this.year = 1999;
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const niver = new Data(12, 5, 1972);
niver.year = 1988;
console.log(niver);
const marriage = new Data;
console.log(marriage);
// data com sintaxe reduzida
class SmartData {
    constructor(samrtDay = 1, smartMonth = 1, smartYear = 1970) {
        this.samrtDay = samrtDay;
        this.smartMonth = smartMonth;
        this.smartYear = smartYear;
    }
}
const smartNiver = new SmartData;
smartNiver.smartMonth = 10;
console.log(smartNiver);
// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opicional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três parâmetros
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.calcTotal = () => this.preco * (1 - this.desconto);
        this.calcPercent = () => this.desconto * 100;
        this.resume = () => `
  ${this.nome} custa R$${this.calcTotal()} (${this.calcPercent()}% off)
  `;
        // this.nome = nome;
        // this.preco = preco;
        // this.desconto = desconto;
    }
}
const lixa = new Produto('shake junt', 60);
const shape = new Produto('flip p.2', 280, 0.3);
console.log(lixa, shape);
console.log(shape.calcTotal());
console.log(shape.resume());
class Car {
    constructor(brand, model, maxSpeed = 200) {
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
        // valor só é utilizado ou alterado internamente, criando consistência
        this.currentSpeed = 0;
        this.speedUp = (speed) => this.changeSpeed(speed);
        this.speedDown = (speed) => this.changeSpeed(speed);
    }
    // public: todos tem acesso
    // private: somente essa classe tem acesso
    // protected: métodos que extendem essa classe tem acesso (transmitido por herança)
    changeSpeed(delta) {
        const newSpeed = this.currentSpeed + delta;
        const speedValid = newSpeed >= 0 && newSpeed <= this.maxSpeed;
        if (speedValid) {
            this.currentSpeed = newSpeed;
        }
        else {
            this.currentSpeed = delta > 0 ? this.maxSpeed : 0;
        }
        return this.currentSpeed;
    }
}
const bolinha = new Car('volkswagen', 'gol', 178);
const speeds = Array(20).fill(0).map(() => Math.floor(Math.random() * 40));
const upDown = Array(20).fill(0).map(() => Math.random() > 0.5);
const roleDoBolinha = speeds.forEach((speed, i) => console
    .log(upDown[i] ? bolinha.speedUp(speed) : bolinha.speedDown(speed)));
class Ferrari extends Car {
    constructor(model, maxSpeed) {
        // passando um parâmetro fixo
        super('Ferrari', model, maxSpeed);
        // se changeSpeed fosse private não poderia ser usado aqui
        this.speedUp = () => this.changeSpeed(20);
        this.speedDown = () => this.changeSpeed(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(f40);
// get e set
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 120) {
            this._age = value;
        }
    }
}
const person1 = new Person;
person1.age = 10;
console.log(person1);
// statics
class MathPI {
    static circArea(raio) {
        // this da ideia de instância
        // boa prática em método estático é usar o próprio nome da classe
        return MathPI.PI * (raio ** 2);
    }
}
MathPI.PI = 3.1416;
// com static não é necessário criar instância da classe (new Classe...)
console.log(MathPI.circArea(12));
// abstract class
class X {
}
// gera erro: Cannot create an instance of an abstract class.
// console.log(new X);
class Calc {
    constructor() {
        this.result = 0;
        this.calcResult = () => this.result;
    }
}
// não da erro por ambas serem abstratas
// abstract class Sum extends Calc {}
// classe não abstrata deve implementar os métodos de quem extende
class Sum extends Calc {
    exec(...nums) {
        this.result = nums.reduce((acc, cur) => acc + cur);
    }
}
class Mult extends Calc {
    exec(...nums) {
        this.result = nums.reduce((acc, cur) => acc * cur);
    }
}
const soma = new Sum();
soma.exec(1, 2, 3, 4);
console.log(soma.calcResult());
const multi = new Mult();
multi.exec(1, 2, 3, 4);
console.log(multi.calcResult());
// singleton
class Unic {
    constructor() { }
    static getInstance() { return Unic.instance; }
    now() { return new Date; }
}
Unic.instance = new Unic;
// const errado = new Unic
console.log(Unic.getInstance().now());
// readonly
class Plane {
    constructor(model, prefix) {
        this.prefix = prefix;
        this.model = model;
    }
}
const turboHelice = new Plane('TU-115', 'PT-ABC');
// gera erro pois os métodos são somente leitura
// turboHelice.model = 'DE_FGH'
// turboHelice.prefix = 'XX_ZZZ'
console.log(turboHelice);
