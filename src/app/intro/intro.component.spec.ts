import { TestBed } from '@angular/core/testing';
import { IntroComponent } from './intro.component';
describe('Intro component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [IntroComponent]});
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(IntroComponent);
        expect(fixture.componentInstance instanceof IntroComponent).toBe(true, 'should create IntroComponent');
    });
});