import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewGroupFormComponent } from './add-new-group-form.component';

describe('AddNewGroupFormComponent', () => {
  let component: AddNewGroupFormComponent;
  let fixture: ComponentFixture<AddNewGroupFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewGroupFormComponent]
    });
    fixture = TestBed.createComponent(AddNewGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
