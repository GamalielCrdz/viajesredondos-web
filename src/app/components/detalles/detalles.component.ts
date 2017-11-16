import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../../services/travel.service';
import { Travel } from '../../models/travel';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  public travel: Travel;

  constructor(private activeRoute: ActivatedRoute,
    private travelService: TravelService
  ) {
    this.travel = new Travel();
    this.travel.hotel = new Hotel();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.travelService.show(params['id']).subscribe(response => {
        this.travel = response;
        this.travel.hotel.stars = [];
        this.travel.hotel.stars.length = this.travel.hotel.qualification;
      });
    });
  }

}
