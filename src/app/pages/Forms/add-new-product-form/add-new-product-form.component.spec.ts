import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProductFormComponent } from './add-new-product-form.component';

describe('AddNewProductFormComponent', () => {
  let component: AddNewProductFormComponent;
  let fixture: ComponentFixture<AddNewProductFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewProductFormComponent]
    });
    fixture = TestBed.createComponent(AddNewProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
