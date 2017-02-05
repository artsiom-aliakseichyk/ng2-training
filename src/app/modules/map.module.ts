import { NgModule } from '@angular/core';

import { WeatherMapComponent } from '../components/map-component/map.component';
import { GoogleMapService } from '../services/map-init.service';

@NgModule({
    declarations: [WeatherMapComponent],
    providers: [GoogleMapService],
    exports: [
        WeatherMapComponent
    ]
})

export class MapModule { }