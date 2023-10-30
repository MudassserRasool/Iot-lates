import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOperatorFormComponent } from './add-new-operator-form.component';

describe('AddNewOperatorFormComponent', () => {
  let component: AddNewOperatorFormComponent;
  let fixture: ComponentFixture<AddNewOperatorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewOperatorFormComponent]
    });
    fixture = TestBed.createComponent(AddNewOperatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
