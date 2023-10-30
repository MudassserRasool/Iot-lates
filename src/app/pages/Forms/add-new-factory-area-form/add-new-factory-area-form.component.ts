import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-factory-area-form',
  templateUrl: './add-new-factory-area-form.component.html',
  styleUrls: ['./add-new-factory-area-form.component.scss']
})
export class AddNewFactoryAreaFormComponent {
  factory = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  networkId = new FormControl('', [Validators.required]);
  length = new FormControl('', [Validators.required]);
  width = new FormControl('', [Validators.required]);
}
