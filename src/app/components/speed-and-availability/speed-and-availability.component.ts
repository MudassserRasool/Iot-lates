import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-speed-and-availability',
  templateUrl: './speed-and-availability.component.html',
  styleUrls: ['./speed-and-availability.component.scss'],
})
export class SpeedAndAvailabilityComponent implements OnInit {
  constructor() {}

  gaugeValue = 80; // Set your gauge value here
  minValue = 0; // Set your minimum value here
  maxValue = 100; // Set your maximum value here

  @Input() summeryGaugeCardData: {
    titel: string;
    value: number;
    behaviour: string;
  } = { titel: '', value: 0, behaviour: '' };
  thresholdConfig = {
    '0': { color: '#ED4E3D', label: 'unsatisfy' }, // red
    '50': { color: '#F2BF48', label: 'satisfy' }, // orange
    '75': { color: '#58C540', label: 'good' }, // green
  };

  ngOnInit(): void {
    // Implement any initialization logic here
  }
}
