// decorator é um comentário que adiciona funcionalidade em um bloco de código

// @logClass
// @logClassIf(true)
@decorator('testando', 123)
class Eletro {
  constructor() {
    console.log('novo!!!');
  }
}

function logClass(constructor: Function) {
  // a função do decorator só é executada quando a classe é carregada
  console.log(constructor); 
}

// todas as instâncias da classe não executam a função decorator
new Eletro()
new Eletro()
new Eletro()
new Eletro()
new Eletro()

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

new Test()
new Test()
new Test()