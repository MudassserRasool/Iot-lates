import { Routes } from '@angular/router';
import { MaintenanceDetailsComponent } from 'src/app/pages/maintenance-details/maintenance-details.component';
import { EnergyComponent } from './screens/energy/energy.component';
import { EquipmentEfficiencyComponent } from './screens/equipment-efficiency/equipment-efficiency.component';
import { FactoryDashboardComponent } from './screens/factory-dashboard/factory-dashboard.component';
import { CurrentShiftComponent } from './screens/current-shift/current-shift.component';
export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]},
  //  {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  //  }
  { path: 'app-factory-dashboard', component: FactoryDashboardComponent },
  {
    path: 'equipment-efficiency',
    component: EquipmentEfficiencyComponent, 
  },

  { path: 'energy', component: EnergyComponent },
  { path: 'maintenance-details', component: MaintenanceDetailsComponent },
  { path: 'master-data', component: CurrentShiftComponent },
];
