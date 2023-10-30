import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeGraphCardComponent } from './gauge-graph-card.component';

describe('GaugeGraphCardComponent', () => {
  let component: GaugeGraphCardComponent;
  let fixture: ComponentFixture<GaugeGraphCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaugeGraphCardComponent]
    });
    fixture = TestBed.createComponent(GaugeGraphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
