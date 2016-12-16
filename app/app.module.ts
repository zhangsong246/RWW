import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MockDataComponent} from './mock-data.component';
import {FirstComponent} from './first.component';
import {MyChartDirective} from './my-chart.directive';
import {MyChartComponent} from './my-chart.component';
import {FirstStandAloneComponent} from './first-stand-alone.component';
import {MockDataService} from './mock-data.service';

import {AppRoutingModule} from './app-routing.module';



@NgModule({
    imports:[
        BrowserModule,
        AppRoutingModule
    ],
    declarations:[
        AppComponent,
        MockDataComponent,
        FirstComponent,
        MyChartDirective,
        MyChartComponent,
        FirstStandAloneComponent
    ],
    providers:[
        MockDataService
    ],
    bootstrap:[
        AppComponent
    ]

})

export class AppModule{}



