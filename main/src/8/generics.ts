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

const log = <T>(args: T[]): void => {
  args.forEach((arg) => console.log(arg))
}

log<number>([1, 2, 3])
log<string>(['a', 'b', 'c'])
log<boolean>([true, false, true])

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

class DateDiff extends Binary<Data, string> {
  getTime(date: Data): number {
    const { day, month, year } = date;
    return new Date(month, day, year).getTime()
  }

  exec(): string {
    const t1 = this.getTime(this.op1);
    const t2 = this.getTime(this.op2);
    const result = Math.abs(t1 - t2);
    const dayMilisec = 1000 * 60 * 60 * 24;

    return `As  datas possuem ${Math.ceil(result / dayMilisec)} dias de distância`
  }
}

const d1 = new Data(23, 4, 1981);
const d2 = new Data(14, 7, 2003);

console.log(new DateDiff(d1, d2).exec());

// desafio line

// aplicando uma restrição a um tipo genérico
class Line<T extends number | string> {
  private line: T[]

  constructor(...args: T[]) {
    this.line = args
  }

  enter(elm: T) {
    this.line.push(elm)
  }

  next(): T | null {
    if (this.line.length) {
      const primeiro = this.line[0]
      this.line.splice(0, 1)
      return primeiro
    } else {
      return null
    }
  }

  log(): void {
    console.log(this.line);
  }
}

// daria erro se o tipo T extendesse somente o tipo number
const line = new Line<string>('Gui', 'Ana', 'Pedro')
line.log();
line.enter('Cadu');
line.log();
line.next()
line.next()
line.next()
line.next()
line.next()

// da erro pois a classe Line não extende o tipo boolean
// const wrongLine = new Line<boolean>(true, false);