import { Component, Input, OnInit } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Pass the fusioncharts library and chart module
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

@Component({
  selector: 'app-current-shift',
  templateUrl: './current-shift.component.html',
  styleUrls: ['./current-shift.component.scss'],
})
export class CurrentShiftComponent implements OnInit {
  // constructor() {}
  @Input() showSelect: boolean = true;
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

  // niddel guag graph--------------------------------------
  dataSource: Object;
  constructor() {
    this.dataSource = {
      chart: {
        caption: 'Customer',
        lowerLimit: '0',
        upperLimit: '100',
        showValue: '1',
        numberSuffix: '%',
        theme: 'fusion',
        showToolTip: '0',
        // bgColor: "transparent", // Add this line
        // canvasBgColor: "transparent" // Add this line
      },
      colorRange: {
        color: [
          {
            minValue: '0',
            maxValue: '50',
            code: '#F2726F',
          },
          {
            minValue: '50',
            maxValue: '75',
            code: '#FFC533',
          },
          {
            minValue: '75',
            maxValue: '100',
            code: '#62B58F',
          },
        ],
      },
      dials: {
        // Value to be displayed on the gauge
        // This should be within your lower and upper limits
        // Change this to dynamically update your gauge
        dial: [
          {
            value: '81',
          },
        ],
      },
      
    };
  }
}
