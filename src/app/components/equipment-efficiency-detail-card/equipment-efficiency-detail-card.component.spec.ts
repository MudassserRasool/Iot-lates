import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEfficiencyDetailCardComponent } from './equipment-efficiency-detail-card.component';

describe('EquipmentEfficiencyDetailCardComponent', () => {
  let component: EquipmentEfficiencyDetailCardComponent;
  let fixture: ComponentFixture<EquipmentEfficiencyDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentEfficiencyDetailCardComponent]
    });
    fixture = TestBed.createComponent(EquipmentEfficiencyDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
