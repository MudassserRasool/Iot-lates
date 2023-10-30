import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEfficiencyOvenCardComponent } from './equipment-efficiency-oven-card.component';

describe('EquipmentEfficiencyOvenCardComponent', () => {
  let component: EquipmentEfficiencyOvenCardComponent;
  let fixture: ComponentFixture<EquipmentEfficiencyOvenCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentEfficiencyOvenCardComponent]
    });
    fixture = TestBed.createComponent(EquipmentEfficiencyOvenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
