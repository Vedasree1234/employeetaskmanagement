import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskanalyticsComponent } from './taskanalytics.component';

describe('TaskanalyticsComponent', () => {
  let component: TaskanalyticsComponent;
  let fixture: ComponentFixture<TaskanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskanalyticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
