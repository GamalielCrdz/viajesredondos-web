import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { HotelService } from "../../services/hotel.service";
import { TravelService } from "../../services/travel.service";

@Component({
  selector: 'app-servicios-api',
  templateUrl: './servicios-api.component.html',
  styleUrls: ['./servicios-api.component.scss']
})
export class ServiciosApiComponent implements OnInit {

  opinion:string;
  hotelForm: FormGroup;
  travelForm: FormGroup;
  hoteles: any[] = [];
  travels: any[] = [];
  public estados = [
    {
      "id": 1,
      "name": "Aguascalientes"
    },
    {
      "id": 2,
      "name": "Baja California"
    },
    {
      "id": 3,
      "name": "Baja California Sur"
    },
    {
      "id": 4,
      "name": "Campeche"
    },
    {
      "id": 5,
      "name": "Coahuila"
    },
    {
      "id": 6,
      "name": "Colima"
    },
    {
      "id": 7,
      "name": "Chiapas"
    },
    {
      "id": 8,
      "name": "Chihuahua"
    },
    {
      "id": 9,
      "name": "Distrito Federal"
    },
    {
      "id": 10,
      "name": "Durango"
    },
    {
      "id": 11,
      "name": "Guanajuato"
    },
    {
      "id": 12,
      "name": "Guerrero"
    },
    {
      "id": 13,
      "name": "Hidalgo"
    },
    {
      "id": 14,
      "name": "Jalisco"
    },
    {
      "id": 15,
      "name": "México"
    },
    {
      "id": 16,
      "name": "Michoacán"
    },
    {
      "id": 17,
      "name": "Morelos"
    },
    {
      "id": 18,
      "name": "Nayarit"
    },
    {
      "id": 19,
      "name": "Nuevo León"
    },
    {
      "id": 20,
      "name": "Oaxaca"
    },
    {
      "id": 21,
      "name": "Puebla"
    },
    {
      "id": 22,
      "name": "Querétaro"
    },
    {
      "id": 23,
      "name": "Quintana Roo"
    },
    {
      "id": 24,
      "name": "San Luis Potosí"
    },
    {
      "id": 25,
      "name": "Sinaloa"
    },
    {
      "id": 26,
      "name": "Sonora"
    },
    {
      "id": 27,
      "name": "Tabasco"
    },
    {
      "id": 28,
      "name": "Tamaulipas"
    },
    {
      "id": 29,
      "name": "Tlaxcala"
    },
    {
      "id": 30,
      "name": "Veracruz"
    },
    {
      "id": 31,
      "name": "Yucatán"
    },
    {
      "id": 32,
      "name": "Zacatecas"
    }
  ];

  constructor(private formBuilder: FormBuilder,
    private hotelService: HotelService,
    private travelService: TravelService) { }

  ngOnInit() {
    this.hotelForm = this.formBuilder.group({
      name: [''],
      qualification: [''],
      address: [''],
      opinions: this.formBuilder.array([]),
    });
    this.travelForm = this.formBuilder.group({
      departureDate: [''],
      returnDate: [''],
      departureCity: [''],
      arrivalCity: [''],
      price: [''],
      numberOfPeople: [''],
      hotel:['']
    });
    this.hotelService.index().subscribe(response => {
      this.hoteles = response;
    });
    this.travelService.index().subscribe(response => {
      this.travels = response;
    });
    this.hotelService.hotel.subscribe(response => {
      this.hoteles.push(response);
    });
  }
  public createHotel(hotelForm) {
    this.hotelService.create(hotelForm).subscribe(response => {
      this.hotelForm.value.opinions = [];
    });
  }

  public deleteHotel(id) {
    this.hotelService.delete(id).subscribe(response => {
      this.hotelService.index().subscribe(response => {
      this.hoteles = response;
      });
    });
  }

  public createTravel(travelForm) {
    this.travelService.create(travelForm).subscribe(response => {
    });
  }

  public deleteTravel(id) {
    this.travelService.delete(id).subscribe(response => {
      this.travelService.index().subscribe(response => {
      this.travels = response;
      });
    });
  }

  public saveOpinion(){
    this.hotelForm.value.opinions.push(this.opinion);
    console.log(this.hotelForm.value.opinions);
  }
}
