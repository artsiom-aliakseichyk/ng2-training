import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[tempColor]'
})

export class TempColorDirective implements OnInit {

    constructor(private el: ElementRef) {}

    @Input() tempColor: number;

    ngOnInit() {
        this.tempColor > 0 ?
            this.el.nativeElement.style.backgroundColor = 'red' :
            this.el.nativeElement.style.backgroundColor = 'blue';
    }
}