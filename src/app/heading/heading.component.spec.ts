import { TestBed } from '@angular/core/testing';
import { HeadingComponent } from './heading.component';
describe('Heading component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [HeadingComponent]});
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(HeadingComponent);
        expect(fixture.componentInstance instanceof HeadingComponent).toBe(true, 'should create HeadingComponent');
    });
});