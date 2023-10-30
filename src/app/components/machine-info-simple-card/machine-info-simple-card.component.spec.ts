import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineInfoSimpleCardComponent } from './machine-info-simple-card.component';

describe('MachineInfoSimpleCardComponent', () => {
  let component: MachineInfoSimpleCardComponent;
  let fixture: ComponentFixture<MachineInfoSimpleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineInfoSimpleCardComponent]
    });
    fixture = TestBed.createComponent(MachineInfoSimpleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
