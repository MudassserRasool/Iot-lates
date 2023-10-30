import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFactoryAreaFormComponent } from './add-new-factory-area-form.component';

describe('AddNewFactoryAreaFormComponent', () => {
  let component: AddNewFactoryAreaFormComponent;
  let fixture: ComponentFixture<AddNewFactoryAreaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewFactoryAreaFormComponent]
    });
    fixture = TestBed.createComponent(AddNewFactoryAreaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
