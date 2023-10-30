import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEfficiencyComponent } from './equipment-efficiency.component';

describe('EquipmentEfficiencyComponent', () => {
  let component: EquipmentEfficiencyComponent;
  let fixture: ComponentFixture<EquipmentEfficiencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentEfficiencyComponent]
    });
    fixture = TestBed.createComponent(EquipmentEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
