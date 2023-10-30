import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-shift',
  templateUrl: './add-new-shift.component.html',
  styleUrls: ['./add-new-shift.component.scss']
})
export class AddNewShiftComponent {
  shiftName = new FormControl('', [Validators.required]);
  factory = new FormControl('', [Validators.required]);
  beginTime = new FormControl('', [Validators.required]);
  endTime = new FormControl('', [Validators.required]);
  comment = new FormControl('', [Validators.required]);

}
