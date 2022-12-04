class Data {
  // publics
  public day: number = 16
  month: number = 11
  year: number = 1999

  constructor(day: number = 1, month: number = 1, year: number = 1970) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const niver = new Data(12, 5, 1972)
niver.year = 1988
console.log(niver);

const marriage = new Data;
console.log(marriage);

// data com sintaxe reduzida
class SmartData {
  constructor(
    public samrtDay: number = 1,
    public smartMonth: number = 1,
    public smartYear: number = 1970
  ) {}
}

const smartNiver = new SmartData
smartNiver.smartMonth = 10
console.log(smartNiver);

// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opicional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três parâmetros

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0,
  ) {
    // this.nome = nome;
    // this.preco = preco;
    // this.desconto = desconto;
  }

  public calcTotal = (): number => this.preco * (1 - this.desconto)

  public calcPercent = (): number => this.desconto * 100

  public resume = (): string => `
  ${this.nome} custa R$${this.calcTotal()} (${this.calcPercent()}% off)
  `
}

const lixa = new Produto('shake junt', 60)
const shape = new Produto('flip p.2', 280, 0.3)

console.log(lixa, shape);
console.log(shape.calcTotal());
console.log(shape.resume());

class Car {
  // valor só é utilizado ou alterado internamente, criando consistência
  private currentSpeed: number = 0

  constructor(
    public brand: string,
    public model: string,
    private maxSpeed: number = 200,
  ) {

  }

  // public: todos tem acesso
  // private: somente essa classe tem acesso
  // protected: métodos que extendem essa classe tem acesso (transmitido por herança)
  protected changeSpeed(delta: number): number {
    const newSpeed = this.currentSpeed + delta
    const speedValid = newSpeed >= 0 && newSpeed <= this.maxSpeed

    if (speedValid) {
      this.currentSpeed = newSpeed
    } else {
      this.currentSpeed = delta > 0 ? this.maxSpeed : 0
    }

    return this.currentSpeed
  }

  public speedUp = (speed: number): number => this.changeSpeed(speed)

  public speedDown = (speed: number): number => this.changeSpeed(speed)

}

const bolinha = new Car('volkswagen', 'gol', 178);

const speeds = Array(20).fill(0).map(() => Math.floor(Math.random() * 40));
const upDown = Array(20).fill(0).map(() => Math.random() > 0.5);


const roleDoBolinha = speeds.forEach((speed, i) => console
  .log(upDown[i] ? bolinha.speedUp(speed) : bolinha.speedDown(speed)))

class Ferrari extends Car {
  constructor (
    model: string,
    maxSpeed: number
  ) { 
    // passando um parâmetro fixo
    super('Ferrari', model, maxSpeed)
  }

  // se changeSpeed fosse private não poderia ser usado aqui
  public speedUp = (): number => this.changeSpeed(20)

  public speedDown = (): number => this.changeSpeed(-15)
}

const f40 = new Ferrari('F40', 324);
console.log(f40);

// get e set
class Person {
  private _age: number = 0

  get age(): number {
    return this._age
  }

  set age(value: number) {
    if (value >= 0 && value <= 120) {
      this._age = value
    }
  }
}

const person1 = new Person
person1.age = 10
console.log(person1);

// statics
class MathPI {
  static PI: number = 3.1416

  static circArea(raio: number): number {
    // this da ideia de instância
    // boa prática em método estático é usar o próprio nome da classe
    return MathPI.PI * (raio ** 2)
  }
}

// com static não é necessário criar instância da classe (new Classe...)
console.log(MathPI.circArea(12));

// abstract class
abstract class X {
  abstract y(a: number): number
  // w(b: number): void { console.log(b) }
}

// gera erro: Cannot create an instance of an abstract class.
// console.log(new X);

abstract class Calc {
  protected result: number = 0

  abstract exec(...nums: number[]): void

  calcResult = (): number => this.result
}

// não da erro por ambas serem abstratas
// abstract class Sum extends Calc {}

// classe não abstrata deve implementar os métodos de quem extende
class Sum extends Calc {
  exec(...nums: number[]): void {
    this.result = nums.reduce((acc, cur) => acc + cur);
  }
}

class Mult extends Calc {
  exec(...nums: number[]): void {
    this.result = nums.reduce((acc, cur) => acc * cur);
  }
}

const soma: Calc = new Sum();
soma.exec(1, 2, 3, 4);
console.log(soma.calcResult());


const multi: Calc = new Mult();
multi.exec(1, 2, 3, 4);
console.log(multi.calcResult());

// singleton
class Unic {
  private static instance: Unic = new Unic
  private constructor() {}

  static getInstance() { return Unic.instance }

  now() { return new Date }
}

// const errado = new Unic

console.log(Unic.getInstance().now());

// readonly
class Plane {
  public readonly model: string

  constructor(
    model: string,
    public readonly prefix: string,
  ) {
    this.model = model
  }
}

const turboHelice = new Plane('TU-115', 'PT-ABC')

// gera erro pois os métodos são somente leitura
// turboHelice.model = 'DE_FGH'
// turboHelice.prefix = 'XX_ZZZ'

console.log(turboHelice);
