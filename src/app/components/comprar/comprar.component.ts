import { Component, OnInit } from '@angular/core';
import { TravelService } from "../../services/travel.service";
import { ActivatedRoute } from "@angular/router";
import { Travel } from "../../models/travel";
import { Hotel } from "../../models/hotel";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  hide: boolean = false;
  travel: Travel;

  constructor(private activeRoute: ActivatedRoute,
    private travelService: TravelService) {
    this.travel = new Travel();
    this.travel.hotel = new Hotel;
    this.travel.hotel.stars = [];
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.travelService.show(params['id']).subscribe(response => {
        this.travel = response;
        this.travel.hotel.stars = [];
        this.travel.hotel.stars.length = this.travel.hotel.qualification;
        console.log(response);
      });
    });
  }

}
