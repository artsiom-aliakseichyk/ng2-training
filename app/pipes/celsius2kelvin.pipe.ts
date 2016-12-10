import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sgTemperature'})

export class TemperatureConverter implements PipeTransform {
    transform(value: number, unit: string): number {
        let temp: number;
        if (unit === "2K" || unit === "2k") {
            temp = value + 273.15;
        }
        else {
            temp = value - 273.15;
        }
        return temp;
    }
}
