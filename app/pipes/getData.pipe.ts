import { Pipe, PipeTransform } from '@angular/core';
import { weatherIcon } from '../interfaces/interfaces';

@Pipe({name: 'sgGetData'})

export class GetData implements PipeTransform {
    transform(obj: weatherIcon, param: string): string {
        if (obj !== undefined && obj !== null) {
            let weather = obj;
            if (param === "icon") {
                let iconUrl: string = "http://openweathermap.org/img/w/" + weather[0][param] + ".png";
                return iconUrl;
            }
            return weather[0][param];
        }
    }
}
