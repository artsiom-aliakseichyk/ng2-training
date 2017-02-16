import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherMapComponent } from './map-component/map.component';

const routes: Routes = [
	{ path: '', component: WeatherMapComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MapRoutingModule { }