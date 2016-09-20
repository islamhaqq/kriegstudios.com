"use strict";
// start up the application
// import platformBrowserDynamic because this is browser only. Import use initialize the platform the application runs in
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// import AppModule to later bootstrap it
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
// create instance of the NgModule called AppModule
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map