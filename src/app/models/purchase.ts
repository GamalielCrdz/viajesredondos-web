import { Travel } from './travel';
import { Hotel } from "./hotel";

export class Purchase {
  name: string;
  lastName: string;
  nacionality: string;
  birthDate: Date;
  sex: string;
  travel: Travel;

  constructor() {
    this.travel = new Travel();
    this.travel.hotel = new Hotel();
  }
}