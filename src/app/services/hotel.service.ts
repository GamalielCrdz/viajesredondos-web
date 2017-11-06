import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class HotelService {

  hotel: BehaviorSubject<any>  = new BehaviorSubject([]);

  apiUrl: string = "http://localhost:8080";

  constructor(
    private http: Http) { }

  public index() {
    return this.http.get(this.apiUrl + "/hotel/index").map((response) => response.json());
  }

  public create(hotel){
    this.hotel.next(hotel)
    return this.http.post(this.apiUrl+ "/hotel", hotel);
  } 

  public delete(id){
    return this.http.delete(this.apiUrl + `/hotel/${id}`);
  }

}
