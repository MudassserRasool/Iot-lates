import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMonthComponent } from './select-month.component';

describe('SelectMonthComponent', () => {
  let component: SelectMonthComponent;
  let fixture: ComponentFixture<SelectMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectMonthComponent]
    });
    fixture = TestBed.createComponent(SelectMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
