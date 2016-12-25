import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[hideEqual]'
})
export class HideEqualDirective {
    constructor(
        private templateRef: TemplateRef<Object>,
        private viewContainer: ViewContainerRef
    ) {}
    @Input() set hideEqual(toHide: boolean) {
        if (toHide) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }
}