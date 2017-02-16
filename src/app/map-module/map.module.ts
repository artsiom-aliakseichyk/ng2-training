import { NgModule } from '@angular/core';

import { WeatherMapComponent } from './map-component/map.component';
import { GoogleMapService } from '../services/map-init.service';
import { MapRoutingModule } from './map.routing';

@NgModule({
	imports: [MapRoutingModule],
    declarations: [WeatherMapComponent],
    providers: [GoogleMapService],
    // exports: [
    //     WeatherMapComponent
    // ]
})

export class MapModule { }