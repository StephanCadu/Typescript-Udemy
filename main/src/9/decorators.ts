// decorator é um comentário que adiciona funcionalidade em um bloco de código

@logClass
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
