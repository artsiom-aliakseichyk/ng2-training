import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { cityDetails } from '../../interfaces/interfaces';
@Component({
    selector: 'city-data-add',
    templateUrl: './citydata-addcity.component.html',
    styleUrls: ['./citydata-addcity.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
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
                temp_min: ['', Validators.required],
                temp: ['', Validators.required],
                temp_max: ['', Validators.required]
            }),
            wind: this.fb.group({
                deg: [0, Validators.required],
                speed: [0, Validators.required]
            })
        })
    }

    addCity(data: cityDetails, isValid: boolean) {
        this.addCityInfo.emit(data);
        this.addCityForm.reset();
    }
}
