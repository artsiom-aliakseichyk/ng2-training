import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { VIEW_MODEL_CONFIG } from '../../config';
import { cityDetails, checkboxEvent, emmitChangeFavObject, viewModel  } from '../../interfaces/interfaces';

@Component({
    selector: 'weather-city-item',
    templateUrl: './citylist.layout.html',
    styleUrls: ['./citylist.style.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherCityComponent {
    // viewmodel = VIEW_MODEL_CONFIG;
    @Input()
    cityDetails: cityDetails;

    @Input()
    viewmodel: viewModel;

    @Output() deleteCityInfo = new EventEmitter<number>();
    @Output() changeFavStatus = new EventEmitter<emmitChangeFavObject>();

    getIDtoDeleteCity(id: number) {
        this.deleteCityInfo.emit(id);
    }

    favCheckboxChange(event: checkboxEvent, id: number ) {
        this.changeFavStatus.emit({checkbox: event.target.checked, id: id});
    }
}
