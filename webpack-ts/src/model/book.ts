import Vendavel from "./vendavel";

export default class Book implements Vendavel {
  constructor(
    public name: string,
    public readonly price: number,
    public readonly discount: number,
  ) {}

  discountedPrice(): number {
    return this.price * (1 - this.discount)
  }
}