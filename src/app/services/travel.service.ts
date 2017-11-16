import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class TravelService {

  public headers;
  apiUrl: string = "http://192.168.13.162:8080";

  constructor(
    private http: Http) { 
      this.headers = new Headers();
       this.headers.append('Content-Type', 'application/json');
    }

  public index() {
    return this.http.get(this.apiUrl + "/travel/index")
      .map((response) => response.json());
  }

  public create(travel){
    return this.http.post(this.apiUrl+ "/travel", travel);
  } 

  public search(travel){
    return this.http.post(this.apiUrl + "/travel/search", travel);
  }

  public delete(id){
    return this.http.delete(this.apiUrl + `/travel/${id}`, this.headers);
  }

  public show(id){
    return this.http.get(this.apiUrl + `/travel/${id}`, this.headers).map(response => response.json());
  }

}
