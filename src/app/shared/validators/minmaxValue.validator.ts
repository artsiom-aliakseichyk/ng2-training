import { FormControl } from '@angular/forms';
import { VALIDATORS_CONST } from '../../config';

export function validateLimits(form: FormControl) {
	const limit = {
		min: VALIDATORS_CONST.MIN_VALUE,
		max: VALIDATORS_CONST.MAX_VALUE
	}
	if (form.value) {
		if (limit.max >= form.value && form.value >= limit.min) {
			return null
		}
		else {
			return {
				validateLimits: {
					valid: false
				}
			}
		}
	}
}