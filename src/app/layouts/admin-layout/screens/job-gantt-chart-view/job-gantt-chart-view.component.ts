import { AppComponent } from 'src/app/app.component';

// import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, ToolbarItem } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-job-gantt-chart-view',
  templateUrl: './job-gantt-chart-view.component.html',
  styleUrls: ['./job-gantt-chart-view.component.scss'],
  
})
export class JobGanttChartViewComponent implements OnInit {
  selectedView: 'Grid' | 'List' = 'Grid';
  @ViewChild(AppComponent) ganttComponent!: AppComponent;
  public data?: object[];
  public taskSettings?: object;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItem[];
  public ngOnInit(): void {
      this.data = [
          {
              TaskID: 1,
              TaskName: 'Project Initiation',
              StartDate: new Date('04/02/2019'),
              EndDate: new Date('04/21/2019'),
              subtasks: [
                  {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
              ]
          },
          {
              TaskID: 5,
              TaskName: 'Project Estimation',
              StartDate: new Date('04/02/2019'),
              EndDate: new Date('04/21/2019'),
              subtasks: [
                  { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
              ]
          },
      ];
      this.taskSettings = {
          id: 'TaskID',
          name: 'TaskName',
          startDate: 'StartDate',
          endDate: 'EndDate',
          duration: 'Duration',
          progress: 'Progress',
          dependency: 'Predecessor',
          child: 'subtasks'
      };
      this.editSettings = {
          allowAdding: true,
          allowEditing: true,
          allowDeleting: true,
          allowTaskbarEditing: true,
          showDeleteConfirmDialog: true
      };
      this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
  }
}
