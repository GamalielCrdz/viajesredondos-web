import { Component, OnInit } from '@angular/core';
import { TravelService } from '../../services/travel.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Travel } from '../../models/travel';

@Component({
  selector: 'app-redondos',
  templateUrl: './redondos.component.html',
  styleUrls: ['./redondos.component.scss']
})
export class RedondosComponent implements OnInit {

  public searchForm: FormGroup;
  traveles: any[] = [];


  constructor(private travelService: TravelService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm =  this.formBuilder.group(
      {
        departureCity: [''],
        arrivalCity: [''],
        departureDate: [''],
        returnDate: ['']
      }
    );

    this.travelService.travels.subscribe(response => {
      if (response.length > 0) {
        console.log(response);
        this.traveles = response;
        for (let travels of this.traveles) {
          travels.stars = [];
          travels.stars.length = travels.hotel.qualification;
        }
      } else {
        this.travelService.index().subscribe(response => {
          this.traveles = response;
          for (let travels of this.traveles) {
            travels.stars = [];
            travels.stars.length = travels.hotel.qualification;
          }
        });
      }
    });
  }

  search(travel: Travel) {
    this.travelService.search(travel).subscribe();
  }

}
