import { Component, OnInit, OnDestroy } from '@angular/core';
import { TravelService } from '../../services/travel.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Travel } from '../../models/travel';
import { State } from '../../models/state';

@Component({
  selector: 'app-redondos',
  templateUrl: './redondos.component.html',
  styleUrls: ['./redondos.component.scss']
})
export class RedondosComponent implements OnInit, OnDestroy {

  public searchForm: FormGroup;
  traveles: any[] = [];
  public state: State;
   public checked: boolean = false;


  constructor(private travelService: TravelService,
    private formBuilder: FormBuilder) {
      this.state = new State();
     }

  ngOnInit() {
    this.searchForm = this.formBuilder.group(
      {
        departureCity: [''],
        arrivalCity: [''],
        departureDate: [''],
        returnDate: ['']
      }
    );
    this.travelService.travels.subscribe(response => {
      this.traveles = response;
      this.verifySearch(this.traveles);
      for (let travels of this.traveles) {
        travels.stars = [];
        travels.stars.length = travels.hotel.qualification;
      }
    });
  }

  verifySearch(data) {
    if (data.length <= 0) {
      this.travelService.index().subscribe(response => {
        this.traveles = response;
        for (let travels of this.traveles) {
          travels.stars = [];
          travels.stars.length = travels.hotel.qualification;
        }
      });
    }
  }

  ngOnDestroy() {
    this.travelService.search(this.searchForm.value).subscribe();
  }

  search(travel: Travel) {
    this.travelService.search(travel).subscribe();
  }

}
