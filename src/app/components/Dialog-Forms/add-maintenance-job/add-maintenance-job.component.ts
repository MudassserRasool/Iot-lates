import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-maintenance-job',
  templateUrl: './add-maintenance-job.component.html',
  styleUrls: ['./add-maintenance-job.component.scss']
})
export class AddMaintenanceJobComponent {
  searchProduct = new FormControl('', [Validators.required]);
  quantity = new FormControl('', [Validators.required]);
  estimatedStart = new FormControl('', [Validators.required]);
  plannedStart = new FormControl('', [Validators.required]);
  estimatedCompletion = new FormControl('', [Validators.required]);
  plannedCompletion = new FormControl('', [Validators.required]);
  productName = new FormControl('', [Validators.required]);
  costedUnitTime = new FormControl('', [Validators.required]);
  toolId = new FormControl('', [Validators.required]);
  setUpMinutes = new FormControl('', [Validators.required]);
  toolLocation = new FormControl('', [Validators.required]);
  cavity = new FormControl('', [Validators.required]);
  pulsesPerUnit = new FormControl('', [Validators.required]);
  numberOfOperators = new FormControl('', [Validators.required]);
  workOrder = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

}

