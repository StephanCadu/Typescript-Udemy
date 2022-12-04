function echoAny(obj: any): any {
  return obj
}

// não da erro no typescript mas imprime undefined,
// pois o tipo number não tem length
console.log(echoAny('João').length);
console.log(echoAny(4).legth);

function echoGeneric<T>(obj: T): T {
  return obj;
}

console.log(echoGeneric('João').length);
console.log(echoGeneric(4));

// ambas dão erro pois o tipo definido não possui length
// console.log(echoGeneric({ nome: 'Eu' }).length);
// console.log(echoGeneric<number>(27).length);

// generics api
const grades: Array<number> = [10, 3, 4.5, 9.2]

grades.push(8.7)
// grades.push('8.7')

console.log(grades);

const imprimir = <T>(args: T[]): void => {
  args.forEach((arg) => console.log(arg))
}

imprimir<number>([1, 2, 3])
imprimir<string>(['a', 'b', 'c'])
imprimir<boolean>([true, false, true])

// tipo genérico
type Echo = <T>(data: T) => T
const callEcho: Echo = echoGeneric
console.log(callEcho('Something'));

// classe com generics

abstract class Binary<T, R> {
  constructor(public op1: T, public op2: T) {}

  abstract exec(): R
}

// console.log(new Binary(1, 2).exec());
// console.log(new Binary('a', 'b').exec());
// console.log(new Binary(1, 'a').exec());
// console.log(new Binary({}, []).exec());

class BinarySum extends Binary<number, number> {
  exec(): number {
    return this.op1 + this.op2
  }
}

console.log(new BinarySum(3, 4).exec());


