export class Quantity {

  id: string;
  amount: number;
  unit: string;

  constructor(id: string, amount: number, unit: string) {
    this.id = id;
    this.amount = amount;
    this.unit = unit;
  }
}
