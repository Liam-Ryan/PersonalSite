import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
@Component({
    selector: 'heading',
    templateUrl: './heading.component.html',
    styles: [require('./heading.component.scss')]
})

export class HeadingComponent implements OnInit {

    observable: Observable<number>;
    triggerHeader: boolean = true;
    headingThreshhold: number = 200;

    constructor() {
        this.observable = Observable.fromEvent(window, 'scroll')
            .auditTime(200)
            .distinctUntilChanged()
            .map(() => window.scrollY)
    }

    ngOnInit(): void {
        this.observable
            .subscribe(
                (yOffset: number) => this.triggerHeader = this.headingThreshhold > yOffset,
                (err: string) => console.error(err),
                () => console.info('done')
            )
    }
}