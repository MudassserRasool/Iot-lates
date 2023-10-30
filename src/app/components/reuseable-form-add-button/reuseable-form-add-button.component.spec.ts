import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableFormAddButtonComponent } from './reuseable-form-add-button.component';

describe('ReuseableFormAddButtonComponent', () => {
  let component: ReuseableFormAddButtonComponent;
  let fixture: ComponentFixture<ReuseableFormAddButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReuseableFormAddButtonComponent]
    });
    fixture = TestBed.createComponent(ReuseableFormAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
