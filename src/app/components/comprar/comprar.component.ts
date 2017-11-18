import { Component, OnInit } from '@angular/core';
import { TravelService } from "../../services/travel.service";
import { ActivatedRoute } from "@angular/router";
import { Travel } from "../../models/travel";
import { Hotel } from "../../models/hotel";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Passenger } from "../../models/passenger";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  public hide: boolean = false;
  public travel: Travel;
  public passengerForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute,
    private travelService: TravelService,
    private formBuilder: FormBuilder) {
    this.travel = new Travel();
    this.travel.hotel = new Hotel();
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
    this.passengerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      nacionality: ['', Validators.required],
      birthDate: ['', Validators.required],
      sex: []
    });
  }

  createUser(user: Passenger) {
    console.log(user);
    

  }

}
