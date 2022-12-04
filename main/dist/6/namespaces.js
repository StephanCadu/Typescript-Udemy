"use strict";
// como ts não é modularizado, funções com mesmo nome em arquivos diferentes
// dão erro, namespace serve para delimitar um escopo onde nomes são únicos
var Areas;
(function (Areas) {
    const PI = 3.14;
    Areas.circleArea = (radius) => {
        return PI * (radius ** 2);
    };
    Areas.retangleArea = (base, height) => {
        return base * height;
    };
})(Areas || (Areas = {}));
console.log(Areas.circleArea(12), Areas.retangleArea(14, 33));
// é possível colocar um dentro de outro
// namespace Geometry {
//   export namespace Area {
//     const PI = 3.14;
//     export const circleArea = (radius: number): number => {
//       return PI * (radius ** 2);
//     }
//     export const retangleArea = (base: number, height: number): number => {
//       return base * height;
//     }
//   }
// }
// console.log(Geometry.Area.circleArea(34));
// importando namespaces
// comentários com 3 / no typescript referenciam 
// outros arquivos para ajudar na hora da compilação
///<reference path="geometryCirc.ts"/>
///<reference path="geometryRect.ts"/>
console.log(Geometry.Area.circleArea(33));
console.log(Geometry.Area.retangleArea(65, 32));
