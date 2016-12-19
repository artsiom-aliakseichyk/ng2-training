import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { cityDetails } from '../../interfaces/interfaces';
@Component({
    selector: 'city-data-add',
    templateUrl: './citydata-addcity.component.html',
    styleUrls: ['./citydata-addcity.component.less']
})

export class CityDataAddComponent implements OnInit {
    public addCityForm: FormGroup;
    public submitted: boolean;

    @Output() addCityInfo = new EventEmitter<cityDetails>();
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.addCityForm = this.fb.group({
            name: ['', Validators.required],
            main: this.fb.group({
                temp_min: [''],
                temp: [''],
                temp_max: ['']
            })
        })
    }

    addCity(data: cityDetails) {
        this.addCityInfo.emit(data);
    }
}
