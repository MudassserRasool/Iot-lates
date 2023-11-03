import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTrendsComponent } from './equipment-trends.component';

describe('EquipmentTrendsComponent', () => {
  let component: EquipmentTrendsComponent;
  let fixture: ComponentFixture<EquipmentTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentTrendsComponent]
    });
    fixture = TestBed.createComponent(EquipmentTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
