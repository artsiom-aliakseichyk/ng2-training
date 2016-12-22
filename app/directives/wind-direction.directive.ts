import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[windDirection]'
})

export class WindDirectionDirective {
    constructor(
        private templateRef: TemplateRef<Object>,
        private viewContainer: ViewContainerRef) {}

    @Input() set windDirection(windDir: number) {
        console.log(windDir);
        console.log(this.templateRef);
        this.viewContainer.createEmbeddedView(this.templateRef);
    };

}
