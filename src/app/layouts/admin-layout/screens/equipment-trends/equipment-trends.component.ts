import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-equipment-trends',
  templateUrl: './equipment-trends.component.html',
  styleUrls: ['./equipment-trends.component.scss']
})
export class EquipmentTrendsComponent  implements OnInit, AfterViewInit {
 
 @ViewChild('productionCycleTrend') energyConsumptionCanvas:
   | ElementRef
   | undefined;
 private energyConsumptionChart: Chart | undefined;
 
 // Another graph data
 @ViewChild('allTags') availabilityCanvas: ElementRef | undefined;
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
    gradient.addColorStop(0, '#C00');

    // Generate time labels with a 5-minute increment
    const startTime = new Date('2022-05-11T01:50:00');
    const endTime = new Date('2022-05-11T02:30:00');
    const timeLabels = [];
    while (startTime <= endTime) {
      timeLabels.push(
        startTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
      startTime.setMinutes(startTime.getMinutes() + 5);
    }

    this.energyConsumptionChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'Aggregated Run Hours LTM',
            data: [65, 65, 65, 65, 95, 95, 65, 65,65,65],
            backgroundColor: gradient,
            borderColor: '#FA8C0B',
            tension: 0.008,
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
            beginAtZero: false, // Start from 60
            min: 60, // Minimum value on the y-axis
            max: 100, // Maximum value on the y-axis
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
     gradient.addColorStop(0, '#C00');
 
     // Generate time labels with a 5-minute increment
     const startTime = new Date('2022-05-11T01:50:00');
     const endTime = new Date('2022-05-11T02:30:00');
     const timeLabels = [];
     while (startTime <= endTime) {
       timeLabels.push(
         startTime.toLocaleTimeString('en-US', {
           hour: '2-digit',
           minute: '2-digit',
         })
       );
       startTime.setMinutes(startTime.getMinutes() + 5);
     }


     this.availabilityChart = new Chart(ctx, {
       type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'Aggregated Run Hours LTM',
            data: [65, 65, 65, 65, 95, 95, 65, 65,65,65],
            backgroundColor: gradient,
            borderColor: '#FA8C0B',
            tension: 0.008,
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
            beginAtZero: false, // Start from 60
            min: 60, // Minimum value on the y-axis
            max: 100, // Maximum value on the y-axis
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
 