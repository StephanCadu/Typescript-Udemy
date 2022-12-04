interface IPerson {
  name: string
  age?: number
  // adicionando uma propriedade dinâmica
  [prop: string]: any
}

const greeting = (person: IPerson): void => {
  console.log(`Hello, ${person.name}!`);
}

const changeName = (person: IPerson): void => {
  person.name = 'Xablau';
}

const me: IPerson = { name: 'Cadu', age: 23, programmer: true };

console.log(changeName(me));
console.log(greeting(me));
