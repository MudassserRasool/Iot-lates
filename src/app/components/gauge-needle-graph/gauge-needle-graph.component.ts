import { Component } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { FusionChartsModule } from 'angular-fusioncharts';

// Pass the fusioncharts library and chart module
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

@Component({
  selector: 'app-gauge-needle-graph',
  templateUrl: './gauge-needle-graph.component.html',
  styleUrls: ['./gauge-needle-graph.component.scss']
})
export class GaugeNeedleGraphComponent {
  dataSource: Object;
  constructor() {
    this.dataSource = {
      "chart": {
        "caption": "Customer Satisfaction Score",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "1",
        "numberSuffix": "%",
        "theme": "fusion",
        "showToolTip": "0"
      },
      "colorRange": {
        "color": [{
          "minValue": "0",
          "maxValue": "50",
          "code": "#F2726F"
        }, {
          "minValue": "50",
          "maxValue": "75",
          "code": "#FFC533"
        }, {
          "minValue": "75",
          "maxValue": "100",
          "code": "#62B58F"
        }]
      },
      "dials": {
        // Value to be displayed on the gauge
        // This should be within your lower and upper limits
        // Change this to dynamically update your gauge
        "dial": [{
          "value": "81"
        }]
      }
    };
  }
}
