export class Quantity {

  private id: string;
  private amount: number;
  private unit: string;

  constructor(id: string, amount: number, unit: string) {
    this.id = id;
    this.amount = amount;
    this.unit = unit;
  }
}
