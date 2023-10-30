import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-tools',
  templateUrl: './add-new-tools.component.html',
  styleUrls: ['./add-new-tools.component.scss']
})
export class AddNewToolsComponent {
  toolId = new FormControl('', [Validators.required]);
  factory = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  weight = new FormControl('', [Validators.required]);
  totalCavity = new FormControl('', [Validators.required]);
  measurementUnit = new FormControl('', [Validators.required]);
  costUnitTime = new FormControl('', [Validators.required]);
  location = new FormControl('', [Validators.required]);
  customer = new FormControl('', [Validators.required]);
  runnerWeight = new FormControl('', [Validators.required]);
  toolShots = new FormControl('', [Validators.required]);
  toolLifetimeMaximumShots = new FormControl('', [Validators.required]);
  toolManufacturedDate = new FormControl('', [Validators.required]);
  comment = new FormControl('', [Validators.required]);
  
}