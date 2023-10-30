import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyCostOverviewCardComponent } from './energy-cost-overview-card.component';

describe('EnergyCostOverviewCardComponent', () => {
  let component: EnergyCostOverviewCardComponent;
  let fixture: ComponentFixture<EnergyCostOverviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyCostOverviewCardComponent]
    });
    fixture = TestBed.createComponent(EnergyCostOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
