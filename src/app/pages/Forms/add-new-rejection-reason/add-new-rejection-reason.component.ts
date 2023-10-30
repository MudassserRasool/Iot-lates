import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-rejection-reason',
  templateUrl: './add-new-rejection-reason.component.html',
  styleUrls: ['./add-new-rejection-reason.component.scss']
})
export class AddNewRejectionReasonComponent {
  name = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

}
