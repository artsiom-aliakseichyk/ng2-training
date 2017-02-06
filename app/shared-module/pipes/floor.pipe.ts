import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sgFloor'})

export class FloorPipe implements PipeTransform {
    transform (value: number, decPoint: number) {
        let result: number;
        if (decPoint !== undefined) {
            result = +value.toFixed(1);
        }
        else {
            result = + value.toFixed(decPoint);
        }
        return result;
    }
}
