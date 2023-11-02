import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEfficiencySpeedAvalibilityComponent } from './equipment-efficiency-speed-avalibility.component';

describe('EquipmentEfficiencySpeedAvalibilityComponent', () => {
  let component: EquipmentEfficiencySpeedAvalibilityComponent;
  let fixture: ComponentFixture<EquipmentEfficiencySpeedAvalibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentEfficiencySpeedAvalibilityComponent]
    });
    fixture = TestBed.createComponent(EquipmentEfficiencySpeedAvalibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
