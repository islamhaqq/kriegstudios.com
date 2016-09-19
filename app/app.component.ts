// root component

import { Component } from '@angular/core';

// decorator funciton
@Component({
    selector: 'main view', // CSS selector for HTML element
    template: '<h1>Default Template</h1>' // how to render component's view
})

export class AppComponent {}