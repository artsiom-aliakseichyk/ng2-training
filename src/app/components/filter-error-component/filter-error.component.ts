import { Component, Input, DoCheck } from "@angular/core";
import { MESSAGES, VALIDATORS_CONST } from '../../config';

@Component({
    selector: 'weather-filter-message',
    templateUrl: './filter-error.template.html',
    styleUrls: ['./filter-error.style.css']
})

export class FilterMessageComponent implements DoCheck {
	errorMessage: string;

    @Input() filterFormInput: any;

    ngDoCheck(): void {
    	console.log(this.filterFormInput);
    	if (this.filterFormInput.dirty && !this.filterFormInput.valid) {
    		for (let error in this.filterFormInput.errors) {
    			if (error === 'validateLimits') {
    				this.errorMessage = MESSAGES.ERROR_LIMIT + 
                        "(Min: " + VALIDATORS_CONST.MIN_VALUE + 
                        "; Max: " + VALIDATORS_CONST.MAX_VALUE +')'
    			}
                else if (error === 'keyError') {
                    this.errorMessage = MESSAGES.KEY_ERROR;
                }
    			else {
    				this.errorMessage = MESSAGES.UNKNOWN_ERROR
    			}
    		}
    	}
    	else {
    		this.errorMessage = '';
    	}
    }
}
