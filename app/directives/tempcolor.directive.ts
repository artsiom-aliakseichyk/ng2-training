import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[tempColor]'
})

export class TempColorDirective implements OnInit {

    constructor(private el: ElementRef) {
        // el.nativeElement.style.backgroundColor = 'yellow';
    }

    @Input() tempColor: number;

    ngOnInit() {
        console.log(this.tempColor);
        this.tempColor > 0 ?
            this.el.nativeElement.style.backgroundColor = 'red' :
            this.el.nativeElement.style.backgroundColor = 'blue';
    }
    // private checkColorTemperature(temp: number) {
    //     if (temp > 0) {
    //         this.color = 'red';
    //     }
    //     else {
    //         this.color = 'blue';
    //     }
    //     return this.color;
    // }
}