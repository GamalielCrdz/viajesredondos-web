import { Component, OnInit } from '@angular/core';
import { TravelService } from "../../services/travel.service";
import { ActivatedRoute } from "@angular/router";
import { Travel } from "../../models/travel";
import { Hotel } from "../../models/hotel";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Purchase } from "../../models/purchase";
import { PurchaseService } from '../../services/purchase.service';
import { log } from 'util';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  public hide: boolean = false;
  public travel: Travel;
  public purchaseForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute,
    private travelService: TravelService,
    private purchaseSerice: PurchaseService,
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
    this.purchaseForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      nacionality: ['', Validators.required],
      birthDate: ['', Validators.required],
      sex: [],
      travel: ['']
    });
  }

  purchase(purchase: Purchase) {
    this.purchaseForm.value.travel = this.travel;
    this.purchaseSerice.create(purchase).subscribe(response => {
      console.log(response);
    })
  }

}
