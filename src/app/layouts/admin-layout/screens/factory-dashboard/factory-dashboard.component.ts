import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-factory-dashboard',
  templateUrl: './factory-dashboard.component.html',
  styleUrls: ['./factory-dashboard.component.scss']
})
export class FactoryDashboardComponent  implements OnInit, AfterViewInit {
 // start simple card-----------------------------------------------
 simpleCardData = [
  {
    title: 'Total Machine',
    amount: 15,
    img: '../../../assets/greenFactoryIcon.png',
  },
  {
    title: 'Total Line',
    amount: 10,
    img: '../../../assets/loadPickerBlueMachineIcon.png',
  },
  {
    title: 'Total Standalone',
    amount: 5,
    img: '../../../assets/pressingMachineIcon.png',
  },
  {
    title: 'Total Energy Machine',
    amount: 25,
    img: '../../../assets/loadPickerRedMachineIcon.png',
  },
];
// end simple card-----------------------------------------------

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

// start job kpk guage graph circular --------------------------
gaugeCardJobKpiData = [
  {
    titel: 'Total Jobs Planned',
    value: 201,
    percent: 76,
  },
  {
    titel: 'Total Delayed Jobs',
    value: 324,
    percent: 51,
  },
  {
    titel: 'Longest Planned Machines',
    value: 80,
    percent: 31,
  },
];
// end job kpk guage graph circular --------------------------
// start guage job maintaince graph circular --------------------------
gaugeCardJobMaintainceData = [
  {
    titel: 'Total Jobs Planned',
    value: 201,
    percent: 76,
  },
  {
    titel: 'Total Delayed Jobs',
    value: 324,
    percent: 51,
  },
  {
    titel: 'Longest Planned Machines',
    value: 80,
    percent: 31,
  },
];
// end guage job maintaince graph circular --------------------------

@ViewChild('energyConsumption') energyConsumptionCanvas:
  | ElementRef
  | undefined;
private energyConsumptionChart: Chart | undefined;

// Another graph data
@ViewChild('availability') availabilityCanvas: ElementRef | undefined;
private availabilityChart: Chart | undefined;

ngOnInit(): void {
  // You can keep your other initialization code here.
}

ngAfterViewInit(): void {
  // start Initialize the Energy Consumption chart
  if (this.energyConsumptionCanvas) {
    const canvas = this.energyConsumptionCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#40AE94');
    // gradient.addColorStop(1, '#7CD0FF');

    this.energyConsumptionChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
        ],
        datasets: [
          {
            label: 'Energy Consumption',
            data: [542, 542, 536, 327, 17, 100.0, 538, 541],
            backgroundColor: gradient,
            barThickness: 12,
            borderRadius: 2,
          },
        ],
      },
      options: {
        aspectRatio: 2,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    });
  }
  // end Initialize the Energy Consumption chart

    // start Initialize the Another Graph chart 
  if (this.availabilityCanvas) {
    const canvas = this.availabilityCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'red');

    this.availabilityChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
        ],
        datasets: [
          {
            label: 'Aggregated Run Hours LTM',
            data: [542, 542, 536, 327, 17, 100.0, 538, 541],
            backgroundColor: gradient,
            borderColor: '#E21D1D',
            tension: 0.4,
            fill: {
              target: 'origin',
              above: 'rgba(255, 0, 0, 0.1)', 
            },
            // barThickness: 28,
            // borderRadius: 2,
          },
        ],
      },
      options: {
        aspectRatio: 3.6,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    });
  }
}
}
