// start up the application
// import platformBrowserDynamic because this is browser only. Import use initialize the platform the application runs in
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import AppModule to later bootstrap it
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
// create instance of the NgModule called AppModule
platform.bootstrapModule(AppModule);
