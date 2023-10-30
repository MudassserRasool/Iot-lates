import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCircleCardComponent } from './job-circle-card.component';

describe('JobCircleCardComponent', () => {
  let component: JobCircleCardComponent;
  let fixture: ComponentFixture<JobCircleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobCircleCardComponent]
    });
    fixture = TestBed.createComponent(JobCircleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
