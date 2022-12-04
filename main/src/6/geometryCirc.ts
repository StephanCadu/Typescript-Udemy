namespace Geometry {
  export namespace Area {
    const PI = 3.14;
    
    export const circleArea = (radius: number): number => {
      return PI * (radius ** 2);
    }
  }
}