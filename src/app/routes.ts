import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { RedondosComponent } from "./components/redondos/redondos.component";
import { HotelComponent } from "./components/hotel/hotel.component";
import { AvionComponent } from "./components/avion/avion.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'redondos', component: RedondosComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'avion', component: AvionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(appRoutes);
