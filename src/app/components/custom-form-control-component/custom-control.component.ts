import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
    selector: 'temp-key',
    templateUrl: './custom-control.template.html',
    providers: [{
    	provide: NG_VALUE_ACCESSOR,
    	useExisting: forwardRef(() => TemperatureKeyComponent),
    	multi: true
	},
	{
      	provide: NG_VALIDATORS,
      	useExisting: forwardRef(() => TemperatureKeyComponent),
      	multi: true,
    }]
})

export class TemperatureKeyComponent implements ControlValueAccessor {
	private rawdata: string;
    private parseError: boolean;
	public writeValue(key: string) {
        if (key) {
            this.rawdata = key;
        }
    }

    get value(): string {
        return this.rawdata;
    }

    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    public validate(c: FormControl) {
        return (!this.parseError) ? null : {
            keyError: {
                valid: false,
            },
        };
    }

    public registerOnTouched() { }

	private onChange(event) {
		this.rawdata = event.target.value;
        if (this.rawdata.toLowerCase() === 'k' || this.rawdata.toLowerCase() === 'c') {
            this.parseError = false;
        }
        else {
            this.parseError = true;
        }
		this.propagateChange(this.rawdata);
	}

	private propagateChange = (_: any) => { };
}