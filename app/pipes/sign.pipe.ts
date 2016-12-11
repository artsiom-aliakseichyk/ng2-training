import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sgSign'})

export class AddSignPipe implements PipeTransform {
    transform (value: string): string {
        let result: string;
        if (value !== undefined && value !== '' && value !== null) {
            if (+value > 0) {
                result = "+" + value;
            }
            else {
                result = value;
            }
            return result;
        }
    }
}
