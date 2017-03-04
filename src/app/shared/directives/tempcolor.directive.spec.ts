import {} from 'jasmine';
import { Component, DebugElement } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempColorDirective } from './tempcolor.directive';
import { By } from '@angular/platform-browser';

@Component({
    template: `
    <div [tempColor]='blueTemp'>{{blueTemp}}</div>
    <div [tempColor]='redTemp'>{{redTemp}}</div>
    `
})

class directiveTestComponent {
	blueTemp: number = -1;
	redTemp: number = 1;
}

describe("Tempcolor directive", () => {

	let fixture: ComponentFixture<directiveTestComponent>;
	let debugElements: DebugElement[];

	beforeEach(() => {	
		fixture = TestBed.configureTestingModule({
            declarations: [TempColorDirective, directiveTestComponent ]
        }).createComponent(directiveTestComponent);

		fixture.detectChanges();

		debugElements = fixture.debugElement.queryAll(By.directive(TempColorDirective));
	})
	
	it('should compile component with directives', () => {
		expect(debugElements.length).toEqual(2);
	})

	it('should have proper bg color', () => {
		let elemBackgroundBlue = debugElements[0].nativeElement.style.backgroundColor;
		let elemBackgroundRed = debugElements[1].nativeElement.style.backgroundColor;
		expect(elemBackgroundBlue).toEqual('blue');
		expect(elemBackgroundRed).toEqual('red');
	})

})