import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewToolsComponent } from './add-new-tools.component';

describe('AddNewToolsComponent', () => {
  let component: AddNewToolsComponent;
  let fixture: ComponentFixture<AddNewToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewToolsComponent]
    });
    fixture = TestBed.createComponent(AddNewToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
