import { Component, OnInit } from '@angular/core';
import { TravelService } from '../../services/travel.service';

@Component({
  selector: 'app-redondos',
  templateUrl: './redondos.component.html',
  styleUrls: ['./redondos.component.scss']
})
export class RedondosComponent implements OnInit {

  traveles: any[] = [];


  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.travelService.index().subscribe(response => {
      // console.log(response);
       this.traveles = response;
       for(let travels of this.traveles ){
         travels.stars = [];
         travels.stars.length = travels.hotel.qualification; 
       }
       console.log(this.traveles);
      // for(let travel of this.traveles){
      //   travel.star.lenght = travel.qualification;
      // }
    });
  }

}
