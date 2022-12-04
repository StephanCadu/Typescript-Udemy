// como ts não é modularizado, funções com mesmo nome em arquivos diferentes
// dão erro, namespace serve para delimitar um escopo onde nomes são únicos
namespace Areas {
  const PI = 3.14;
  
  export const circleArea = (radius: number): number => {
    return PI * (radius ** 2);
  }

  export const retangleArea = (base: number, height: number): number => {
    return base * height;
  }
}

console.log(Areas.circleArea(12), Areas.retangleArea(14, 33));

// é possível colocar um dentro de outro
namespace Geometry {
  export namespace Area {
    const PI = 3.14;
    
    export const circleArea = (radius: number): number => {
      return PI * (radius ** 2);
    }
  
    export const retangleArea = (base: number, height: number): number => {
      return base * height;
    }
  }
}

console.log(Geometry.Area.circleArea(34));
