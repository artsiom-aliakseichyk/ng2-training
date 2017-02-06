import { NgModule } from '@angular/core';

import { WeatherMapComponent } from './map.component';
import { GoogleMapService } from './map-init.service';

@NgModule({
    declarations: [WeatherMapComponent],
    providers: [GoogleMapService],
    exports: [
        WeatherMapComponent
        // GoogleMapService
    ]
})

export class MapModule { }