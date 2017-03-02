import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from "./routes.module";

import { CoreModule }       from './core.module';
import { WeatherModule } from './weather.module';
// import { MapModule } from './map.module';

import { AppComponent } from '../components/app-component/app.component';
export { AppComponent };

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from '../rx/effects';
import { WeatherActions } from '../rx/actions';
import { reducer } from '../rx/reducers';

import { projectRequestOptions } from '../customRequestOptions';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RoutingModule,
        // MapModule,
        WeatherModule,
        StoreModule.provideStore(reducer),
        EffectsModule.run(WeatherEffects),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        WeatherActions,
        {
            provide: RequestOptions,
            useClass: projectRequestOptions
        }
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
