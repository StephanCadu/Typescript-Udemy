"use strict";
function echoAny(obj) {
    return obj;
}
// não da erro no typescript mas imprime undefined,
// pois o tipo number não tem length
console.log(echoAny('João').length);
console.log(echoAny(4).legth);
function echoGeneric(obj) {
    return obj;
}
console.log(echoGeneric('João').length);
console.log(echoGeneric(4));
// ambas dão erro pois o tipo definido não possui length
// console.log(echoGeneric({ nome: 'Eu' }).length);
// console.log(echoGeneric<number>(27).length);
// generics api
const grades = [10, 3, 4.5, 9.2];
grades.push(8.7);
// grades.push('8.7')
console.log(grades);
const log = (args) => {
    args.forEach((arg) => console.log(arg));
};
log([1, 2, 3]);
log(['a', 'b', 'c']);
log([true, false, true]);
const callEcho = echoGeneric;
console.log(callEcho('Something'));
// classe com generics
class Binary {
    constructor(op1, op2) {
        this.op1 = op1;
        this.op2 = op2;
    }
}
// console.log(new Binary(1, 2).exec());
// console.log(new Binary('a', 'b').exec());
// console.log(new Binary(1, 'a').exec());
// console.log(new Binary({}, []).exec());
class BinarySum extends Binary {
    exec() {
        return this.op1 + this.op2;
    }
}
console.log(new BinarySum(3, 4).exec());
class DateDiff extends Binary {
    getTime(date) {
        const { day, month, year } = date;
        return new Date(month, day, year).getTime();
    }
    exec() {
        const t1 = this.getTime(this.op1);
        const t2 = this.getTime(this.op2);
        const result = Math.abs(t1 - t2);
        const dayMilisec = 1000 * 60 * 60 * 24;
        return `As  datas possuem ${Math.ceil(result / dayMilisec)} dias de distância`;
    }
}
const d1 = new Data(23, 4, 1981);
const d2 = new Data(14, 7, 2003);
console.log(new DateDiff(d1, d2).exec());
// desafio line
// aplicando uma restrição a um tipo genérico
class Line {
    constructor(...args) {
        this.line = args;
    }
    enter(elm) {
        this.line.push(elm);
    }
    next() {
        if (this.line.length) {
            const primeiro = this.line[0];
            this.line.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    log() {
        console.log(this.line);
    }
}
// daria erro se o tipo T extendesse somente o tipo number
const line = new Line('Gui', 'Ana', 'Pedro');
line.log();
line.enter('Cadu');
line.log();
line.next();
line.next();
line.next();
line.next();
line.next();
class Mapa {
    constructor(...args) {
        this.mapa = new Array();
        this.mapa = args;
    }
    obter(chave) {
        const result = this.mapa.find((obj) => obj.chave === chave);
        return result ? result : null;
    }
    colocar(obj) {
        const elementFound = this.obter(obj.chave);
        if (elementFound) {
            elementFound.valor = obj.valor;
        }
        else {
            this.mapa.push(obj);
        }
    }
    imprimir() { console.log(this.mapa); }
    limpar() { this.mapa = new Array(); }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
