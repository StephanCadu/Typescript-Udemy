// decorator é um comentário que adiciona funcionalidade em um bloco de código

// @logClass
// @logClassIf(true)
// @decorator('testando', 123)
// class Eletro {
//   constructor() {
//     console.log('novo!!!');
//   }
// }

function logClass(constructor: Function) {
  // a função do decorator só é executada quando a classe é carregada
  console.log(constructor); 
}

// todas as instâncias da classe não executam a função decorator
// new Eletro()
// new Eletro()
// new Eletro()
// new Eletro()
// new Eletro()

function emptyDecorator(_: Function) {}

// factory é uma função que retorna um decorator

function logClassIf(value: boolean) {
  return value ? logClass : emptyDecorator
}

function decorator(a: string, b: number) {
  return function(_: Function): void {
    console.log(`${a} ${b}`);
  }
}

// @logClassIf(true)
@logObject
class Test {
  constructor() {
    console.log('TEST');
  }
}

type Constructor = { new(...args: any[]): {} }

function logObject(constructor: Constructor) {
  console.log('Carregado...');
  return class extends constructor {
    constructor(...args: any[]) {
      console.log('Antes');
      super(...args)
      console.log('Depois');
    }
  }
}

// new Test()
// new Test()

interface Eletro {
  log?(): void
}

function logable(constructor: Function) {
  constructor.prototype.log = function() {
    console.log(this);
  }
}

@logable
class Eletro {
  constructor() {
    console.log('novo!!!');
  }
}

const eletro = new Eletro()
eletro.log && eletro.log()

// colocando mais de um decorator em uma classe

@decorator('um', 2)
@logable
@logClass
@logClassIf(true)
class Decorated {
  constructor() {
    console.log('I\'m a very decorated class');
    
  }
}

type Profile = {
  nome: string
  email: string
  admin: boolean
}

// desafio decorator admin
const loggedUser: Profile = {
  nome: 'Nome',
  email: 'email@mail.com',
  admin: false,
}

@adminProfile
class changeAdmin {
  critic() {
    console.log('Something critic was changed');
  }
}

function adminProfile<T extends Constructor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args)
      if(!loggedUser || !loggedUser.admin) {
        throw new Error('Permission denied')
      }
    }
  }
}

new changeAdmin().critic()

// decorator de método

class CheckAccount {
  private balance: number
  
  constructor(balance: number) {
    this.balance = balance
  }

  @freeze
  debit(value: number) {
    if (value <= this.balance) { 
      this.balance -= value
      return true
    } else {
      return false
    }
  }

  @freeze
  getBalance() { return this.balance }
}

// Object.freeze()
function freeze(target: any, prop: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(prop);
  // diz que o elemento não pode ser sobrescrito
  descriptor.writable = false  
}

const newAccount = new CheckAccount(10328.45)
newAccount.debit(5000)
console.log(newAccount.getBalance());

// gera erro pois os métodos estão congelados (somente leitura) pelo decorator freeze
// newAccount.getBalance = function() {
//   return this['balance'] + 7000
// }

console.log(newAccount.getBalance());