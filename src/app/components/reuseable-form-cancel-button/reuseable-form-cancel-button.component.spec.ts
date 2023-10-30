import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableFormCancelButtonComponent } from './reuseable-form-cancel-button.component';

describe('ReuseableFormCancelButtonComponent', () => {
  let component: ReuseableFormCancelButtonComponent;
  let fixture: ComponentFixture<ReuseableFormCancelButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReuseableFormCancelButtonComponent]
    });
    fixture = TestBed.createComponent(ReuseableFormCancelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
