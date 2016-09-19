import {Component} from '@angular/core';
require('./app.component.global.scss');

@Component({
    selector: 'site-root',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss')]
})
export class AppComponent { }