import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { GoogleMapService } from '../../services/map-init.service';
@Component({
    selector: 'weather-map',
    templateUrl: './map.layout.html',
    styleUrls: ['./map.style.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherMapComponent implements OnInit {
	constructor(private mapService: GoogleMapService) { }

	ngOnInit() {
		this.mapService.init();
	}
}
