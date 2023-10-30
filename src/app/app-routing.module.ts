import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './pages/forget/forget.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
// import { EquipmentEfficiencyComponent } from './pages/equipment-efficiency/equipment-efficiency.component';
// import { FactorySummaryComponent } from './pages/factory-summary/factory-summary.component';
// import { MaintenanceDetailsComponent } from './pages/maintenance-details/maintenance-details.component';
// import { EnergyComponent } from './pages/energy/energy.component';
// import { EquipmentComponent } from './pages/equipment/equipment.component';
// import { AddNewFactoryFormComponent } from './pages/add-new-factory-form/add-new-factory-form.component';
// import { AddNewGroupFormComponent } from './pages/add-new-group-form/add-new-group-form.component';
// import { AddNewEquipmentComponent } from './pages/add-new-equipment/add-new-equipment.component';
// import { AddNewToolsComponent } from './pages/add-new-tools/add-new-tools.component';
// import { AddNewShiftComponent } from './pages/add-new-shift/add-new-shift.component';
// import { AddNewProductFormComponent } from './pages/add-new-product-form/add-new-product-form.component';
// import { AddNewOperatorFormComponent } from './pages/add-new-operator-form/add-new-operator-form.component';
// import { AddNewRejectionReasonComponent } from './pages/add-new-rejection-reason/add-new-rejection-reason.component';
// import { AddNewFactoryAreaFormComponent } from './pages/add-new-factory-area-form/add-new-factory-area-form.component';
// import { AddNewJobFormComponent } from './pages/add-new-job-form/add-new-job-form.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EmailAuthenticationComponent } from './pages/two-step-authentication-forms/email-authentication/email-authentication.component';
import { PhoneAuthenticationComponent } from './pages/two-step-authentication-forms/phone-authentication/phone-authentication.component';
import { PhoneOtpComponent } from './pages/two-step-authentication-forms/phone-otp/phone-otp.component';
import { PhoneAuthenticationSuccessComponent } from './pages/two-step-authentication-forms/phone-authentication-success/phone-authentication-success.component';

// const routes: Routes = [

//   {
//     path: '',
//     component: LoginComponent,
//   },
//   {
//     path: 'register',
//     component: RegistrationComponent,
//   },
//   {
//     path: 'forget',
//     component: ForgetComponent,
//   },
//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//   },
//   {
//     path: 'efficiency',
//     component: EquipmentEfficiencyComponent,
//   },
//   {
//     path: 'summery',
//     component: FactorySummaryComponent,
//   },
//   {
//     path: 'energy',
//     component: EnergyComponent,
//   },
//   {
//     path: 'maintenance-details',
//     component: MaintenanceDetailsComponent,
//   },
//   {
//     path: 'quipment',
//     component: EquipmentComponent,
//   },
//   {
//     path: 'dashboard-layout',
//     component: DashboardlayoutComponent ,
//   },
//   {
//     path: 'add-new-factory',
//     component: AddNewFactoryFormComponent ,
//   },
//   {
//     path: 'add-new-group',
//     component: AddNewGroupFormComponent ,
//   },
//   {
//     path: 'add-new-equipment',
//     component: AddNewEquipmentComponent ,
//   },
//   {
//     path: 'add-new-shift',
//     component: AddNewShiftComponent ,
//   },
//   {
//     path: 'add-new-tools',
//     component: AddNewToolsComponent ,
//   },
//   {
//     path: 'add-new-product',
//     component: AddNewProductFormComponent ,
//   },
//   {
//     path: 'add-new-operator',
//     component: AddNewOperatorFormComponent ,
//   },
//   {
//     path: 'add-new-rejection-reason',
//     component: AddNewRejectionReasonComponent ,
//   },
//   {
//     path: 'add-new-factory-area',
//     component: AddNewFactoryAreaFormComponent ,
//   },
//   {
//     path: 'add-new-job',
//     component: AddNewJobFormComponent ,
//   },

// ];
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'forget',
    component: ForgetComponent,
  },
  {
    path: 'email-authentication',
    component: EmailAuthenticationComponent,
  },
  {
    path: 'phone-authentication',
    component: PhoneAuthenticationComponent,
  },
  {
    path: 'phone-otp',
    component: PhoneOtpComponent,
  },
  {
    path: 'phone-otp-success',
    component: PhoneAuthenticationSuccessComponent,
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/admin-layout/admin-layout.module').then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
