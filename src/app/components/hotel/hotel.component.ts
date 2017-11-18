import { Component, OnInit } from '@angular/core';
import { HotelService } from "../../services/hotel.service";
import { Hotel } from "../../models/hotel";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  public hotels: Hotel[]

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.index().subscribe(response => {
      this.hotels = response;
       for (let hotel of  this.hotels) {
        hotel.stars = [];
        hotel.stars.length = hotel.qualification;
      }
    })
    
  }

}
