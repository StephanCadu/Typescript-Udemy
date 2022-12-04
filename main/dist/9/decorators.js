"use strict";
// decorator é um comentário que adiciona funcionalidade em um bloco de código
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @logClass
// @logClassIf(true)
// @decorator('testando', 123)
// class Eletro {
//   constructor() {
//     console.log('novo!!!');
//   }
// }
function logClass(constructor) {
    // a função do decorator só é executada quando a classe é carregada
    console.log(constructor);
}
// todas as instâncias da classe não executam a função decorator
// new Eletro()
// new Eletro()
// new Eletro()
// new Eletro()
// new Eletro()
function emptyDecorator(_) { }
// factory é uma função que retorna um decorator
function logClassIf(value) {
    return value ? logClass : emptyDecorator;
}
function decorator(a, b) {
    return function (_) {
        console.log(`${a} ${b}`);
    };
}
// @logClassIf(true)
let Test = class Test {
    constructor() {
        console.log('TEST');
    }
};
Test = __decorate([
    logObject
], Test);
function logObject(constructor) {
    console.log('Carregado...');
    return class extends constructor {
        constructor(...args) {
            console.log('Antes');
            super(...args);
            console.log('Depois');
        }
    };
}
function logable(constructor) {
    constructor.prototype.log = function () {
        console.log(this);
    };
}
let Eletro = class Eletro {
    constructor() {
        console.log('novo!!!');
    }
};
Eletro = __decorate([
    logable
], Eletro);
const eletro = new Eletro();
eletro.log && eletro.log();
// colocando mais de um decorator em uma classe
let Decorated = class Decorated {
    constructor() {
        console.log('I\'m a very decorated class');
    }
};
Decorated = __decorate([
    decorator('um', 2),
    logable,
    logClass,
    logClassIf(true)
], Decorated);
// desafio decorator admin
const loggedUser = {
    nome: 'Nome',
    email: 'email@mail.com',
    admin: false,
};
let changeAdmin = class changeAdmin {
    critic() {
        console.log('Something critic was changed');
    }
};
changeAdmin = __decorate([
    adminProfile
], changeAdmin);
function adminProfile(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!loggedUser || !loggedUser.admin) {
                throw new Error('Permission denied');
            }
        }
    };
}
new changeAdmin().critic();
// decorator de método
class CheckAccount {
    constructor(balance) {
        this.balance = balance;
    }
    debit(value) {
        if (value <= this.balance) {
            this.balance -= value;
            return true;
        }
        else {
            return false;
        }
    }
    getBalance() { return this.balance; }
}
__decorate([
    notNegative
], CheckAccount.prototype, "balance", void 0);
__decorate([
    freeze,
    __param(0, paramInfo)
], CheckAccount.prototype, "debit", null);
__decorate([
    freeze
], CheckAccount.prototype, "getBalance", null);
// Object.freeze()
function freeze(target, prop, descriptor) {
    console.log(target);
    console.log(prop);
    // diz que o elemento não pode ser sobrescrito
    descriptor.writable = false;
}
const newAccount = new CheckAccount(10328.45);
newAccount.debit(5000);
console.log(newAccount.getBalance());
// gera erro pois os métodos estão congelados (somente leitura) pelo decorator freeze
// newAccount.getBalance = function() {
//   return this['balance'] + 7000
// }
console.log(newAccount.getBalance());
// attribute decorator
function notNegative(target, prop) {
    delete target[prop];
    Object.defineProperty(target, prop, {
        get: function () {
            return target[`_${prop}`];
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Invalid value');
            }
            else {
                target[`_${prop}`] = value;
            }
        }
    });
}
// parameter decorator
function paramInfo(target, method, paramIndex) {
    console.log((target));
    console.log((method));
    console.log((paramIndex));
}
