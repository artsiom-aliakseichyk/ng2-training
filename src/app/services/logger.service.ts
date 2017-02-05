import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {

    constructor() { }
    log(message: string | number): void {
        console.log(`%c[LOG-MESSAGE] #-> ${message}`, `color : black`);
    }

    success(message: string | number): void {
        console.log(`%c[LOG-MESSAGE] #-> ${message}`, `color : green`);
    }

    warning(message: string | number): void {
        console.warn(`%c[LOG-MESSAGE] #-> ${message}`, `color : orange`);
    }

    info(message: string | number): void {
        console.info(`%c[LOG-MESSAGE] #-> ${message}`, `color : blue`);
    }

    error(message: string | number): void {
        console.error(`%c[LOG-MESSAGE] #-> ${message}`, `color : red`);
    }
}