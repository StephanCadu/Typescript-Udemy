"use strict";
const Employee = {
    supervisors: ['Joana', 'Alceu'],
    checkPoint: (hour) => hour > 8 ? 'Fora do horário' : 'Ponto normal',
};
console.log(Employee.checkPoint(10));
