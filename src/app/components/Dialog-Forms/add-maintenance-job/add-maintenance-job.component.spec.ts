import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaintenanceJobComponent } from './add-maintenance-job.component';

describe('AddMaintenanceJobComponent', () => {
  let component: AddMaintenanceJobComponent;
  let fixture: ComponentFixture<AddMaintenanceJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMaintenanceJobComponent]
    });
    fixture = TestBed.createComponent(AddMaintenanceJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
