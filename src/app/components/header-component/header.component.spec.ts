import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WeatherHeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Weather Header Component', () => {
	let headerComponent: WeatherHeaderComponent;
	let fixture: ComponentFixture<WeatherHeaderComponent>;
	let debugElement: DebugElement;
	let domElement: HTMLElement;

	beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WeatherHeaderComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(WeatherHeaderComponent);
        debugElement = fixture.debugElement.query(By.css('h1'));
        domElement = debugElement.nativeElement;
    }));

    it('should compile component', () => {
    	expect(debugElement).toBeDefined();
    });

    it('should have header title', () => {
    	expect(domElement.textContent).toEqual('Weather Forecast');
    })
})