import { Hotel } from './hotel';

export class Travel {

  id: number;
  arrivalCity: string;
  departureCity: string;
  numberOfPeople: number;
  departureDate: Date;
  price: number;
  returnDate: Date;
  hotel: Hotel;

  constructor() {}
}