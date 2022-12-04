interface IPerson {
  name: string
  age?: number
  // adicionando uma propriedade dinâmica
  [prop: string]: any
  greet: (lastname: string) => void
}

const greeting = (person: IPerson): void => {
  console.log(`Hello, ${person.name}!`);
}

const changeName = (person: IPerson): void => {
  person.name = 'Xablau';
}

const me: IPerson = { 
  name: 'Cadu', 
  age: 23, 
  programmer: true, 
  greet(lastname: string): void {
    console.log(`Hello ${this.name} ${lastname}`)
  },
 };

console.log(changeName(me));
console.log(greeting(me));
console.log(me.greet('Salamanca'));

