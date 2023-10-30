import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEfficiencyOverviewCardComponent } from './equipment-efficiency-overview-card.component';

describe('EquipmentEfficiencyOverviewCardComponent', () => {
  let component: EquipmentEfficiencyOverviewCardComponent;
  let fixture: ComponentFixture<EquipmentEfficiencyOverviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentEfficiencyOverviewCardComponent]
    });
    fixture = TestBed.createComponent(EquipmentEfficiencyOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
