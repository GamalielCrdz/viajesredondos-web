import { Component, OnInit } from '@angular/core';
import { State } from "../../models/state";
import { ActivatedRoute } from "@angular/router";
import { PurchaseService } from "../../services/purchase.service";
import { Purchase } from "../../models/purchase";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-pago-form',
  templateUrl: './pago-form.component.html',
  styleUrls: ['./pago-form.component.scss']
})
export class PagoFormComponent implements OnInit {

  public tarjetas = [{ name: "American Express" }, { name: "Master Card" }, { name: "Visa" }]
  public meses = [{ name: "01" },
  { name: "02" },
  { name: "03" },
  { name: "04" },
  { name: "05" },
  { name: "06" },
  { name: "07" },
  { name: "08" },
  { name: "09" },
  { name: "10" },
  { name: "11" },
  { name: "12" }];
  public anos = [{ name: "2017" },
  { name: "2017" },
  { name: "2018" },
  { name: "2019" },
  { name: "2020" },
  { name: "2021" },
  { name: "2022" },
  { name: "2023" },
  { name: "2024" },
  { name: "2025" },
  { name: "2026" },
  { name: "2027" }]
  public estados: any;
  public compra: boolean = false;
  public states: State;
  public purchase: Purchase;
  public tarjetaForm: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private purchaseService: PurchaseService,
    private formBuilder: FormBuilder
  ) {
    this.states = new State();
    this.estados = this.states.states;
    this.purchase = new Purchase();
  }

  ngOnInit() {
    this.tarjetaForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      numberCard: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      code: ['', [Validators.required]],
      holder: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      postalCode: ['', [Validators.required]]
    });

    this.activeRoute.params.subscribe(params => {
      this.purchaseService.show(params['id']).subscribe(response => {
        console.log(response)
        this.purchase = response;
      });
    });
  }

  comprar() {
    if (this.tarjetaForm.valid) {
      this.compra = true;
    }
  }

}
