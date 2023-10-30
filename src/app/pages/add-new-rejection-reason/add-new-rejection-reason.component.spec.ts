import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRejectionReasonComponent } from './add-new-rejection-reason.component';

describe('AddNewRejectionReasonComponent', () => {
  let component: AddNewRejectionReasonComponent;
  let fixture: ComponentFixture<AddNewRejectionReasonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewRejectionReasonComponent]
    });
    fixture = TestBed.createComponent(AddNewRejectionReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
