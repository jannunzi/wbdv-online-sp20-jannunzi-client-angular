import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPillsComponent } from './topic-pills.component';

describe('TopicPillsComponent', () => {
  let component: TopicPillsComponent;
  let fixture: ComponentFixture<TopicPillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
