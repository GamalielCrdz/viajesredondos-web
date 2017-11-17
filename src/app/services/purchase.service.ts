import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PurchaseService {
  apiUrl: string = "http://192.168.13.162:8080";

  constructor(private http: Http) { }

  public create(purchase) {
    return this.http.post(this.apiUrl + "/purchase", purchase).map(response => response.json());
  }

}
