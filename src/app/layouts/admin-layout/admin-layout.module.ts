import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgxGaugeModule } from 'ngx-gauge';
import { EnergyCostDetailsCardComponent } from 'src/app/components/energy-cost-details-card/energy-cost-details-card.component';
import { EnergyCostOverviewCardComponent } from 'src/app/components/energy-cost-overview-card/energy-cost-overview-card.component';
import { GaugeGraphCardComponent } from 'src/app/components/gauge-graph-card/gauge-graph-card.component';
import { MachineInfoSimpleCardComponent } from 'src/app/components/machine-info-simple-card/machine-info-simple-card.component';
import { ReuseableFormAddButtonComponent } from 'src/app/components/reuseable-form-add-button/reuseable-form-add-button.component';
import { ReuseableFormCancelButtonComponent } from 'src/app/components/reuseable-form-cancel-button/reuseable-form-cancel-button.component';
import { SelectMonthComponent } from 'src/app/components/select-month/select-month.component';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';
// import { AddNewEquipmentComponent } from './add-new-equipment/add-new-equipment.component';
// import { AddNewFactoryFormComponent } from './add-new-factory-form/add-new-factory-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { FusionChartsModule } from 'angular-fusioncharts';
import { EquipmentEfficiencyListViewComponent } from 'src/app/components/equipment-efficiency-list-view/equipment-efficiency-list-view.component';
import { EquipmentEfficiencyOvenCardComponent } from 'src/app/components/equipment-efficiency-oven-card/equipment-efficiency-oven-card.component';
import { GaugeNeedleGraphComponent } from 'src/app/components/gauge-needle-graph/gauge-needle-graph.component';
import { JobCircleCardComponent } from 'src/app/components/job-circle-card/job-circle-card.component';
import { SpeedAndAvailabilityComponent } from 'src/app/components/speed-and-availability/speed-and-availability.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HelloComponent } from './hello/hello.component';
import { CurrentShiftComponent } from './screens/current-shift/current-shift.component';
import { EnergyComponent } from './screens/energy/energy.component';
import { EquipmentEfficiencySpeedAvalibilityComponent } from './screens/equipment-efficiency-speed-avalibility/equipment-efficiency-speed-avalibility.component';
import { EquipmentEfficiencyComponent } from './screens/equipment-efficiency/equipment-efficiency.component';
import { EquipmentTrendsComponent } from './screens/equipment-trends/equipment-trends.component';
import { FactoryDashboardComponent } from './screens/factory-dashboard/factory-dashboard.component';
import { JobGanttChartViewComponent } from './screens/job-gantt-chart-view/job-gantt-chart-view.component';
import { StackedBarChartComponent } from './screens/stacked-bar-chart/stacked-bar-chart.component';
import { TestingComponent } from './testing/testing.component';

// import { GanttModule } from '@syncfusion/ej2-angular-gantt';

import { NgApexchartsModule } from 'ng-apexcharts';

import { GanttModule } from '@syncfusion/ej2-angular-gantt';
// import { BrowserModule } from '@angular/platform-browser';
// import the GanttModule for the Gantt component
// import { GanttChartModule } from '@smart-webcomponents-angular/ganttchart';
// import GanttChartMo
// import { GanttComponent, EditService , FilterService, SortService, SelectionService, ToolbarService,DayMarkersService } from '@syncfusion/ej2-angular-gantt';
import {
  EditService,
  SelectionService,
  ToolbarService,
} from '@syncfusion/ej2-angular-gantt';
@NgModule({
  declarations: [
    UserProfileComponent,
    TestingComponent,
    HelloComponent,

    // reuseable components
    SelectMonthComponent,
    ReuseableFormCancelButtonComponent,
    ReuseableFormAddButtonComponent,

    // forms components
    // AddNewEquipmentComponent,
    // AddNewFactoryFormComponent,
    FactoryDashboardComponent,

    // components for factory summery
    MachineInfoSimpleCardComponent,
    GaugeGraphCardComponent,
    JobCircleCardComponent,

    // energy
    EnergyCostOverviewCardComponent,
    EnergyCostDetailsCardComponent,
    EnergyComponent,
    EquipmentEfficiencyComponent,

    // Equipment effecency
    EquipmentEfficiencyOvenCardComponent,
    SpeedAndAvailabilityComponent,
    CurrentShiftComponent,
    EquipmentEfficiencyListViewComponent,
    StackedBarChartComponent,

    GaugeNeedleGraphComponent,
    EquipmentEfficiencySpeedAvalibilityComponent,
    EquipmentTrendsComponent,
    JobGanttChartViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
    NgxGaugeModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    FusionChartsModule,
    // GanttModule,
    GanttModule,
    // BrowserModule,
    // BrowserModule,
    // GanttChartModule,

    // GanttModule,
    NgApexchartsModule,
  ],
  // providers: [ EditService , FilterService, SortService, SelectionService,ToolbarService,DayMarkersService ]
  providers: [ToolbarService, EditService, SelectionService],
})
export class AdminLayoutModule {}
