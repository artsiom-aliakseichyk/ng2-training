import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule }       from './core.module';
import { WeatherModule } from './weather.module';
import { MapModule } from './map.module';

import { AppComponent } from '../components/app-component/app.component';
export { AppComponent };

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        MapModule,
        WeatherModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
