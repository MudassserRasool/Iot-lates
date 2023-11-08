import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  equipment: string;
  // discription: string;
  department: string;
  title: string;
  status: string;
  priorty: string;
  assignedTo: string;
  reportedBy: string;
  runable: string;
  creationDate: string;
  dueBy: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 7231,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Not Started',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7232,
    equipment: 'W32',
    // discription: 'Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Stopped',
    priorty: 'High',
    assignedTo: 'someone2',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7233,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Available',
    title: 'Master batch hopper fell off',
    status: 'Running',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7231,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Not Started',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7231,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Not Started',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7232,
    equipment: 'W32',
    // discription: 'Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Stopped',
    priorty: 'High',
    assignedTo: 'someone2',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7233,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Available',
    title: 'Master batch hopper fell off',
    status: 'Running',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7231,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Not Started',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7231,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Not Started',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
 
  {
    position: 7233,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Available',
    title: 'Master batch hopper fell off',
    status: 'Running',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7231,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Not Started',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7231,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Not Started',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7232,
    equipment: 'W32',
    // discription: 'Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Stopped',
    priorty: 'High',
    assignedTo: 'someone2',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7233,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Available',
    title: 'Master batch hopper fell off',
    status: 'Running',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
  {
    position: 7231,
    equipment: 'W32',
    // discription: 'Not Available',
    department: 'Not Available',
    title: 'Master batch hopper fell off',
    status: 'Not Started',
    priorty: 'High',
    assignedTo: 'someone1',
    reportedBy: 'Martin Clarke',
    runable: 'false',
    creationDate: '12/12/2021',
    dueBy: '16/12/2021',
  },
 
];

@Component({
  selector: 'app-maintenance-details',
  templateUrl: './maintenance-details.component.html',
  styleUrls: ['./maintenance-details.component.scss'],
})
export class MaintenanceDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'equipment',
    // 'discription',
    'department',
    'title',
    'status',
    'priorty',
    'assignedTo',
    'reportedBy',
    'runable',
    'creationDate',
    'dueBy',
    'actions',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  uploadItem(element: PeriodicElement) {
    // Implement your upload logic here, e.g., show a file upload dialog
  }

  editItem(element: PeriodicElement) {
    // Implement your edit logic here, e.g., open a dialog or navigate to an edit page
  }

  viewItem(element: PeriodicElement) {
    // Implement your view logic here, e.g., open a dialog or navigate to a view page
  }
}
