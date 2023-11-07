import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGanttChartViewComponent } from './job-gantt-chart-view.component';

describe('JobGanttChartViewComponent', () => {
  let component: JobGanttChartViewComponent;
  let fixture: ComponentFixture<JobGanttChartViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobGanttChartViewComponent]
    });
    fixture = TestBed.createComponent(JobGanttChartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
