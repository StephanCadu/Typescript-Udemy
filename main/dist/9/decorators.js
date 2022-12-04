"use strict";
// decorator é um comentário que adiciona funcionalidade em um bloco de código
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @logClass
// @logClassIf(true)
let Eletro = class Eletro {
    constructor() {
        console.log('novo!!!');
    }
};
Eletro = __decorate([
    decorator('testando', 123)
], Eletro);
function logClass(constructor) {
    // a função do decorator só é executada quando a classe é carregada
    console.log(constructor);
}
// todas as instâncias da classe não executam a função decorator
new Eletro();
new Eletro();
new Eletro();
new Eletro();
new Eletro();
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
new Test();
new Test();
new Test();
new Test();
