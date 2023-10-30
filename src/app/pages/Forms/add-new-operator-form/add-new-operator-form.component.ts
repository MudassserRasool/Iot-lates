import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-operator-form',
  templateUrl: './add-new-operator-form.component.html',
  styleUrls: ['./add-new-operator-form.component.scss']
})
export class AddNewOperatorFormComponent {
  employeeNumber = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  jobTitle = new FormControl('', [Validators.required]);
  factory = new FormControl('', [Validators.required]);
  department = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  trackId = new FormControl('', [Validators.required]);
  upload(event:Event){
    console.log(event)
 }
}
