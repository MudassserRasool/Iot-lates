import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeNeedleGraphComponent } from './gauge-needle-graph.component';

describe('GaugeNeedleGraphComponent', () => {
  let component: GaugeNeedleGraphComponent;
  let fixture: ComponentFixture<GaugeNeedleGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaugeNeedleGraphComponent]
    });
    fixture = TestBed.createComponent(GaugeNeedleGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
