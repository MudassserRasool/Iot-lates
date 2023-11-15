import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { EquipmentEfficiencyComponent } from './pages/equipment-efficiency/equipment-efficiency.component';
// import { ReuseableEquipmentEfficiencyComponent } from './components/reuseable-equipment-efficiency/reuseable-equipment-efficiency.component';
import { EquipmentEfficiencyDetailCardComponent } from './components/equipment-efficiency-detail-card/equipment-efficiency-detail-card.component';
import { EquipmentEfficiencyOverviewCardComponent } from './components/equipment-efficiency-overview-card/equipment-efficiency-overview-card.component';
// import { NgxPasswordStrengthModule } from 'ngx-password-strength';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { FactorySummaryComponent } from './pages/factory-summary/factory-summary.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { NgxChartsModule }from '@swimlane/ngx-charts';  // added
import { FusionChartsModule } from 'angular-fusioncharts';

// import { EnergyCostDetailsCardComponent } from './components/energy-cost-details-card/energy-cost-details-card.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from './component/components.module';
// import { EquipmentEfficiencyOvenCardComponent } from './components/equipment-efficiency-oven-card/equipment-efficiency-oven-card.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddNewFactoryAreaFormComponent } from './pages/Forms/add-new-factory-area-form/add-new-factory-area-form.component';
import { AddNewGroupFormComponent } from './pages/Forms/add-new-group-form/add-new-group-form.component';
import { AddNewJobFormComponent } from './pages/Forms/add-new-job-form/add-new-job-form.component';
import { AddNewOperatorFormComponent } from './pages/Forms/add-new-operator-form/add-new-operator-form.component';
import { AddNewProductFormComponent } from './pages/Forms/add-new-product-form/add-new-product-form.component';
import { AddNewRejectionReasonComponent } from './pages/Forms/add-new-rejection-reason/add-new-rejection-reason.component';
import { AddNewShiftComponent } from './pages/Forms/add-new-shift/add-new-shift.component';
import { AddNewToolsComponent } from './pages/Forms/add-new-tools/add-new-tools.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { LoginComponent } from './pages/login/login.component';
import { MaintenanceDetailsComponent } from './pages/maintenance-details/maintenance-details.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { EmailAuthenticationComponent } from './pages/two-step-authentication-forms/email-authentication/email-authentication.component';
import { PhoneAuthenticationSuccessComponent } from './pages/two-step-authentication-forms/phone-authentication-success/phone-authentication-success.component';
import { PhoneAuthenticationComponent } from './pages/two-step-authentication-forms/phone-authentication/phone-authentication.component';
import { PhoneOtpComponent } from './pages/two-step-authentication-forms/phone-otp/phone-otp.component';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddMaintenanceJobComponent } from './components/Dialog-Forms/add-maintenance-job/add-maintenance-job.component';
// import { EquipmentEfficiencyListViewComponent } from './components/equipment-efficiency-list-view/equipment-efficiency-list-view.component';

// import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    AppComponent,
    EquipmentEfficiencyComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetComponent,
    // ReuseableEquipmentEfficiencyComponent,
    EquipmentEfficiencyOverviewCardComponent,
    EquipmentEfficiencyDetailCardComponent,
    // FactorySummaryComponent,
    // GaugeGraphCardComponent,
    // EnergyCostDetailsCardComponent,
    MaintenanceDetailsComponent,
    // EquipmentEfficiencyOvenCardComponent,
    // SpeedAndAvailabilityComponent,
    EquipmentComponent,
    SimpleCardComponent,

    AddNewGroupFormComponent,
    AddNewToolsComponent,
    AddNewShiftComponent,
    AddNewRejectionReasonComponent,
    AddNewFactoryAreaFormComponent,
    AddNewOperatorFormComponent,
    AddNewProductFormComponent,
    AddNewJobFormComponent,
    // MachineInfoSimpleCardComponent,
    // JobCircleCardComponent,
    AdminLayoutComponent,
    PhoneAuthenticationComponent,
    EmailAuthenticationComponent,
    PhoneOtpComponent,
    PhoneAuthenticationSuccessComponent,
    AddMaintenanceJobComponent,
    // GaugeNeedleGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    FusionChartsModule,
    MatTableModule,
    MatSortModule,
    ComponentsModule,
    // NgxIntlTelInputModule,
    NgxIntlTelInputModule,
    NgOtpInputModule,
    MatTabsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
