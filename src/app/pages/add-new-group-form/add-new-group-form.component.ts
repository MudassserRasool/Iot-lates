import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-new-group-form',
  templateUrl: './add-new-group-form.component.html',
  styleUrls: ['./add-new-group-form.component.scss']
})
export class AddNewGroupFormComponent {
  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  factory = new FormControl('', [Validators.required]);

}
