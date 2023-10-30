import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewJobFormComponent } from './add-new-job-form.component';

describe('AddNewJobFormComponent', () => {
  let component: AddNewJobFormComponent;
  let fixture: ComponentFixture<AddNewJobFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewJobFormComponent]
    });
    fixture = TestBed.createComponent(AddNewJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
