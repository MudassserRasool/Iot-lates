import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5xy from '@amcharts/amcharts5/xy';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss'],
})
export class StackedBarChartComponent {
  private root!: am5.Root;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone
  ) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new('chartdiv');

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout,
        })
      );

      // Define data
      let data = [
        {
          category: 'Operating Normally',
          value1: 12,  // blue
          value2: 11,  // yellow
          value3: 10,  // red
          value4: 9,  // green
        },
      ];

      // Create X-axis
      let xAxis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
        })
      );

      // Create Y-Axis
      let yAxis = chart.yAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
          categoryField: 'category',
        })
      );
      yAxis.data.setAll(data);

      // Create series
      let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: 'value1',
          categoryYField: 'category',
          clustered: false,
          tooltipText: '{valueX}% [{name}]',
          fill: am5.color('#43AD90'), // Add this line for green color 
        })
      );
      series1.data.setAll(data);

      let series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: 'value2',
          categoryYField: 'category',
          clustered: false,
          tooltipText: '{valueX}% [{name}]',
          fill: am5.color('#FF0000'), // Add this line for red color
        })
      );
      series2.data.setAll(data);

      // Add more series for red and green colors
      let series3 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: 'value3', // Change this line
          categoryYField: 'category',
          clustered: false,
          tooltipText: '{valueX}% [{name}]',
          fill: am5.color('#FFCE51'), // Add this line for yellow color
        })
      );
      series3.data.setAll(data);

      let series4 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: 'value4', // Change this line
          categoryYField: 'category',
          clustered: false,
          tooltipText: '{valueX}% [{name}]',
          fill: am5.color('#09AEF9'), // Add this line for blue color
        })
      );
      series4.data.setAll(data);

      // Add legend
      let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set('cursor', am5xy.XYCursor.new(root, {}));

      this.root = root;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
