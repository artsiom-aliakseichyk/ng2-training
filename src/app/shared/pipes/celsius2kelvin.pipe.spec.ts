import {} from 'jasmine';
// import { TestBed } from '@angular/core/testing';
import { TemperatureConverter } from './celsius2kelvin.pipe';

describe('sample test', () => {
	let celsius2kelvin: TemperatureConverter = new TemperatureConverter();

	it('pipe should be defined', () => {
		expect(celsius2kelvin).toBeDefined();
	})
    it('should transform to Kelvins', () => {
    	let testValue: number = celsius2kelvin.transform('0', '2K');
        expect(testValue).toEqual(273.15);
    });

    it('should tranform to Celsius', () => {
    	let testValue: number = celsius2kelvin.transform('0', 'C');
    	expect(testValue).toEqual(0);
    });
}); 