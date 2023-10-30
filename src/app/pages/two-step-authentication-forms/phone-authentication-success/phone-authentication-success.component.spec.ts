import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAuthenticationSuccessComponent } from './phone-authentication-success.component';

describe('PhoneAuthenticationSuccessComponent', () => {
  let component: PhoneAuthenticationSuccessComponent;
  let fixture: ComponentFixture<PhoneAuthenticationSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneAuthenticationSuccessComponent]
    });
    fixture = TestBed.createComponent(PhoneAuthenticationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
