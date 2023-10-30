import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-product-form',
  templateUrl: './add-new-product-form.component.html',
  styleUrls: ['./add-new-product-form.component.scss']
})
export class AddNewProductFormComponent {
  productCode = new FormControl('', [Validators.required]);
  factory = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  measurementUnit = new FormControl('', [Validators.required]);
  tool = new FormControl('', [Validators.required]);
  costedUnitTime = new FormControl('', [Validators.required]);
  weightUnitGrams = new FormControl('', [Validators.required]);
  numberOfOperators = new FormControl('', [Validators.required]);

}
