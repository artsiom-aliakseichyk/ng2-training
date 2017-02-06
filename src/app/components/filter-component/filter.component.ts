import { Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { validateLimits } from '../../shared/validators/minmaxValue.validator';
import { viewModel } from '../../interfaces/interfaces';
import { VIEW_MODEL_CONFIG } from '../../config';

@Component({
    selector: 'weather-filter',
    templateUrl: './filter.layout.html',
    styleUrls: ['./filter.style.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilterComponent implements OnInit {
	public filterForm: FormGroup;
	public submitted: boolean;
	public viewmodel: viewModel = VIEW_MODEL_CONFIG;
	constructor(private fb: FormBuilder) {}

	@Output() updateViewModel = new EventEmitter<viewModel>();

	ngOnInit() {
		this.filterForm = this.fb.group({
			updatedate: [this.viewmodel.updatedate, Validators.required],
			windspeed: [this.viewmodel.windspeed, Validators.required],
			winddirection: [this.viewmodel.winddirection, Validators.required],
			weathericon: [this.viewmodel.weathericon, Validators.required],
			citieslimit: [this.viewmodel.citieslimit, [Validators.maxLength(2), validateLimits]],
			tempkey: [this.viewmodel.tempkey, Validators.required]
		})
	}

	applyFilter(data:viewModel, isValid:boolean) {
		console.log("is valid: " + isValid);
		console.log("data: ", data);
		if (isValid) {
			this.updateViewModel.emit(data);
		}
	}
}