import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-shift',
  templateUrl: './current-shift.component.html',
  styleUrls: ['./current-shift.component.scss']
})
export class CurrentShiftComponent  implements OnInit {
  
constructor() {}
@Input() showSelect: boolean = true;
gaugeValue = 80; // Set your gauge value here
minValue = 0;   // Set your minimum value here
maxValue = 100; // Set your maximum value here

@Input() summeryGaugeCardData: { titel: string, value: number, behaviour: string } = { titel: "", value: 0, behaviour: '' };
thresholdConfig = {
  '0': { color: '#ED4E3D', label: 'unsatisfy' },  // red
  '50': { color: '#F2BF48', label: 'satisfy' },   // orange
  '75': { color: '#58C540', label: 'good' }      // green
};

ngOnInit(): void {
  // Implement any initialization logic here
}
// start guage graph --------------------------
gaugeCardData = [
  {
    titel: 'OEE',
    value: 30,
    behaviour: 'Unsatisfactory',
  },
  {
    titel: 'Availability',
    value: 55,
    behaviour: 'Satisfactory',
  },
  {
    titel: 'Performance',
    value: 78,
    behaviour: 'Expected',
  },
  {
    titel: 'Quality',
    value: 60,
    behaviour: 'Satisfactory',
  },
];
// end guage graph --------------------------

}
