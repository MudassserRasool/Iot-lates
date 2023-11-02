import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEfficiencyListViewComponent } from './equipment-efficiency-list-view.component';

describe('EquipmentEfficiencyListViewComponent', () => {
  let component: EquipmentEfficiencyListViewComponent;
  let fixture: ComponentFixture<EquipmentEfficiencyListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentEfficiencyListViewComponent]
    });
    fixture = TestBed.createComponent(EquipmentEfficiencyListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
