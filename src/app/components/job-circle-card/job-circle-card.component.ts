import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-circle-card',
  templateUrl: './job-circle-card.component.html',
  styleUrls: ['./job-circle-card.component.scss'],
})
export class JobCircleCardComponent implements OnInit {
  constructor() {}
  @Input() showSelect: boolean = true;
  gaugeValue = 80; // Set your gauge value here
  minValue = 0; // Set your minimum value here
  maxValue = 100; // Set your maximum value here

  @Input() jobCardData: { titel: string; value: number; percent:number } = {
    titel: '',
    value: 0,
    percent:0
  };
  thresholdConfig = {
    '0': { color: '#78B7FF' }, // red
    '50': { color: '#FF9900' }, // orange
    '75': { color: '#3FAD93' }, // green
  };

  ngOnInit(): void {
    // Implement any initialization logic here
  }
}
