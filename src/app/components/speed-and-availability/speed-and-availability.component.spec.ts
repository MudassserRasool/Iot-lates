import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedAndAvailabilityComponent } from './speed-and-availability.component';

describe('SpeedAndAvailabilityComponent', () => {
  let component: SpeedAndAvailabilityComponent;
  let fixture: ComponentFixture<SpeedAndAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeedAndAvailabilityComponent]
    });
    fixture = TestBed.createComponent(SpeedAndAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
