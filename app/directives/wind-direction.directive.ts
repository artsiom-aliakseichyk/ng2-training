import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[windDirection]'
})

export class WindDirectionDirective {
    constructor(private el: ElementRef) {}

    @Input() set windDirection(windDir: number) {
        console.log(windDir);
        this.el.nativeElement.style.transform = "translate(-50%, -50%) rotate(" + windDir + "deg)";
    };

}
