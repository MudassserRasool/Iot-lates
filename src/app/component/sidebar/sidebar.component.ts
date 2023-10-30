import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/app-factory-dashboard',
    title: 'Factory Dashboard',
    icon: 'grid_view',
    class: '',
  },
  {
    path: '/equipment-efficiency',
    title: 'Equipment Efficiency',
    icon: 'person',
    class: '',
  },
  { path: '/energy', title: 'Energy', icon: 'directions_car', class: '' },
  { path: '/silo', title: 'Silo', icon: 'work_outline', class: '' },
  { path: '/job', title: 'Job', icon: 'shopping_cart', class: '' },
  {
    path: '/analysis-report',
    title: 'Analysis Report',
    icon: 'signal_cellular_alt',
    class: '',
  },
  { path: '/report', title: 'Report', icon: 'event_note', class: '' },
  {
    path: '/maintenance-details',
    title: 'Maintenance Details',
    icon: 'event_note',
    class: '',
  },
  {
    path: '/maintenance-details2',
    title: 'Maintenance Details',
    icon: 'event_note',
    class: '',
  },
  {
    path: '/maintenance-manager',
    title: 'Maintenance Manager',
    icon: 'mail_outline',
    class: '',
  },
  {
    path: '/maintenance-manager',
    title: 'Operations ',
    icon: 'mail_outline',
    class: '',
  },
  {
    path: '/master-data',
    title: 'Master Data ',
    icon: 'mail_outline',
    class: '',
  },
  {
    path: '/maintenance-manager',
    title: 'Assembly Line',
    icon: 'mail_outline',
    class: '',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
