import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { cityDetails, checkboxEvent, emmitChangeFavObject  } from '../../../interfaces/interfaces';

@Component({
    selector: 'weather-city-item',
    templateUrl: './citylist.component.html',
    styleUrls: ['./citylist.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherCityComponent {
    testdata: string = 'hello';
    @Input()
    cityDetails: cityDetails;

    @Output() deleteCityInfo = new EventEmitter<number>();
    @Output() changeFavStatus = new EventEmitter<emmitChangeFavObject>();

    getIDtoDeleteCity(id: number) {
        this.deleteCityInfo.emit(id);
    }

    favCheckboxChange(event: checkboxEvent, id: number ) {
        this.changeFavStatus.emit({checkbox: event.target.checked, id: id});
    }
}
