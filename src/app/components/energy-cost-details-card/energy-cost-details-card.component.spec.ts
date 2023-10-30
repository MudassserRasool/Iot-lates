import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyCostDetailsCardComponent } from './energy-cost-details-card.component';

describe('EnergyCostDetailsCardComponent', () => {
  let component: EnergyCostDetailsCardComponent;
  let fixture: ComponentFixture<EnergyCostDetailsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyCostDetailsCardComponent]
    });
    fixture = TestBed.createComponent(EnergyCostDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
