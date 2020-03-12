import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseViewerComponent } from './course-viewer.component';

describe('CourseViewerComponent', () => {
  let component: CourseViewerComponent;
  let fixture: ComponentFixture<CourseViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
