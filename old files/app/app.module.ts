// root module and entry point

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // import BrowserModule in order to run application on browser

// import exported class from app.component.ts
import { AppComponent } from './app.component';


@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
