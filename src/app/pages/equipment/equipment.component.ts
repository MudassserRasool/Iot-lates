import { Component, AfterViewInit, ViewChild  } from '@angular/core';
// import * as ApexCharts from 'apexcharts';
// import ApexCharts from 'apexcharts'
// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexTitleSubtitle,
// } from 'ng-apexcharts'; 


// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   title: ApexTitleSubtitle;
// };


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent  {
  
  // @ViewChild('chart') chart: ChartComponent;
  // public chartOptions: Partial<ChartOptions> = {};

  constructor() {
    // this.chartOptions = {
    //   series: [
    //     {
    //       name: "My-series",
    //       data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    //     }
    //   ],
    //   chart: {
    //     height: 350,
    //     type: "bar"
    //   },
    //   title: {
    //     text: "My First Angular Chart"
    //   },
    //   xaxis: {
    //     categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    //   }
    // };
  }

  showSelectValue = false;
  gaugeCardData = [
    {
      titel: 'Quality',
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
      titel: 'OEE',
      value: 60,
      behaviour: 'Satisfactory',
    },
  ];

  // simple card with amount and titel

  equipmentCardData = [
    {
      amount: 1445,
      titel: 'Production (Auto)',
    },
    {
      amount: 0,
      titel: 'Production (Manual)',
    },
    {
      amount: 0,
      titel: 'Rejection (Manual)',
    },
    {
      amount: 81.72,
      titel: 'Energy Consumed',
    },
  ];

  
}
