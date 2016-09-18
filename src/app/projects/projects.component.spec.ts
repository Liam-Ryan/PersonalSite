import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './Projects.component';
describe('Projects component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [ProjectsComponent]});
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(ProjectsComponent);
        expect(fixture.componentInstance instanceof ProjectsComponent).toBe(true, 'should create ProjectsComponent');
    });
});